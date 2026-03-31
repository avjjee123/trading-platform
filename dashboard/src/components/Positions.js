import React, { useState, useEffect } from "react";
// import {positions} from "../data/data.js"; 
import axios from "axios"; 
const Position=()=>{
    const [positions,setPositions]=useState([]); 
    useEffect(()=>{
      axios("http://localhost:3002/getPositions")
      .then((res)=>{
        setPositions(res.data); 
      })
    },[])
  return(
    <>
      <h3 className="title">Position ({positions.length})</h3>   
   
       <div className="order-table">
         <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur.val</th>
            <th>P&L</th>
             <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
  
          {positions.map((stock,index)=>{ 
            const curValue=stock.price*stock.qty;
            const isprofit=curValue-stock.avg*stock.qty >=0.0;
            const profClass=isprofit?"profit":"loss"; 
            const dayClass=stock.isprofit?"profit":"loss";

            return(
              <tr key={index}> 
              <td>{stock.name}</td>  
              <td>{stock.qty}</td>     
              <td>{stock.avg}</td> 
              <td>{stock.price}</td>
              <td>{curValue}</td>
              <td className={profClass} 
              >{(curValue-stock.avg*stock.qty).toFixed(2)}
              </td>   
              <td className={profClass}>{stock.net}</td> 
              <td className={profClass}>{stock.day}</td>  
              </tr>  
            ); 
          })}
         </table>
       </div> 
    </>
  );
};

export default Position;  
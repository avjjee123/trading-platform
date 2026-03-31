import React, { useState, useEffect } from "react";
import VecticalGraph from "./VerticalGraph.js"; 
import axios from "axios"; 
// import {holdings} from "../data/data.js"; 

const Holdings=()=>{
  
    const [allholdings,setHoldings]=useState([]);

    useEffect(()=>{
      axios.get("http://localhost:3002/getHoldings")
      .then((res)=>{ 
        setHoldings(res.data);  
      }) 
    },[]); 
  
const labels=allholdings.map((subarray)=>subarray["name"]);  
const data = {
  labels,
  datasets: [
    {
      label: 'Stock price',
      data: allholdings.map((stock) =>stock["price"]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Stock Avg. price',
      data: allholdings.map((stock) =>stock["avg"]),  
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return(
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>   

       <div className="order-table">
         <table>
         <thead>
           <tr>
            <th>Product</th> 
            <th>Instrument</th>
            <th>Qty.</th> 
            <th>Avg. cost</th>
            <th>LTP</th> 
            <th>P&L</th>
             <th>Net chg.</th> 
            <th>Day chg.</th>
          </tr>
         </thead>
         <tbody>
          {allholdings.map((stock,index)=>{
            const curValue=stock.price*stock.qty;
            const isprofit=curValue-stock.avg*stock.qty >=0.0;
            const profClass=isprofit?"profit":"loss"; 
            const dayClass=stock.isLoss?"profit":"loss";

            return(
              <tr key={index} className="">
              <td>{stock.name}</td>  
              <td>{stock.qty}</td>     
              <td>{stock.avg}</td> 
              <td>{stock.price}</td> 
              <td className={profClass} 
              >{(curValue-stock.avg*stock.qty).toFixed(2)}
              </td>   
              <td className={profClass}>{stock.net}</td> 
              <td className={profClass}>{stock.day}</td>  
              </tr>  
            ); 
          })}
          </tbody>
         </table>
       </div> 

       <div>

        <VecticalGraph data={data}/> 
       </div>
    </>
  );
};

export default Holdings; 
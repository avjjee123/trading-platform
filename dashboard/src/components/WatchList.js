import { useState } from "react";
import React from "react";

import {Tooltip,Grow} from "@mui/material"; 
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp,MoreHoriz, PaddingOutlined} from "@mui/icons-material"; 
import DoughnutGraph from "./DoughnutGraph.js"; 
import {watchlist} from "../data/data.js";
// import BuyActionWindow from "./BuyActionWindow.js";


const WatchList = ({getWindowOpen}) => {

const labels=watchlist.map((stock)=>stock.name); 
const data = {
  labels, 
  datasets: [
    {
      label: 'Price',
      data:watchlist.map((stock)=>stock["price"]), 
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 186, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}; 

const getwindow=(uid)=>{
     getWindowOpen(uid); 
    }
  return (
    <>
     <div className="watchlist-container">
      <div className="search-container">
        <input
         type="text"
         name="search"
         id="search"
         placeholder="search eg:infy,bse,nifty,bse,nifyt fut weekly, gold mcx"
         className="search"
         />
         <span className="counts">{watchlist.length} / 50</span>
      </div> 

      <ul className="list">
        {watchlist.map((stock,index)=>{
         return(
          <WatchListItem stock={stock} key={index} getWindowOpen={getwindow}/> 
         )
        })}
      </ul> 
      <DoughnutGraph data={data}/>  
     </div>
     
    </>
  );
};

export default WatchList;

const WatchListItem=({stock,getWindowOpen})=>{ 
    const [showWatchlistActions,setshowWatchlistActions]=useState(false);

    const handleMouseEnter=()=>{
      setshowWatchlistActions(true); 
    }
    const handleMouseLeave=()=>{
      setshowWatchlistActions(false); 
    }   

    return(
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
         <p className={stock.isDown?"down":"up"}>{stock.name}</p>
         <div className="itemInfo">
           <span className="percent">{stock.percent}</span>
           {stock.isDown?(
            <KeyboardArrowDown className="down"/>
           ):(
            <KeyboardArrowUp className="up"/>  
           )}
           <span className="price">{stock.price}</span>
         </div> 
        </div>
         {showWatchlistActions && <WatchListActions uid={stock.name} getWindowOpen={getWindowOpen}/>}
      </li> 
    )
};

const WatchListActions =({uid,getWindowOpen})=>{ 


  return(
    <span className="actions">
      <span>
        <Tooltip
        title="Buy (B)"
        placeholder="top"
        arrow TransitionComponent={Grow}
        >
         <button className="buy" onClick={()=>getWindowOpen(uid)}>Buy</button>
        </Tooltip> 
        <Tooltip
        title="Sell (S)"
        placeholder="top"
        arrow TransitionComponent={Grow}
        >
         <button className="Sell">Sell</button>
        </Tooltip> 
        <Tooltip
        title="Analytics (A)" 
        placeholder="top"
        arrow TransitionComponent={Grow}
        >
         <button className="action">
          <BarChartOutlined className="icon"/>
         </button>
        </Tooltip> 
        <Tooltip
        title="More" 
        placeholder="top"
        arrow TransitionComponent={Grow}
        >
         <button className="action">
          <MoreHoriz className="icon"/> 
         </button>
        </Tooltip>
      </span>    
    </span>
  )
}


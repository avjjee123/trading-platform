import { use } from "react";
import {useState,createContent} from "react";

import SellActionWindow from "SellActionWindow";

const GeneralContext = createContent({
    openBuyWindow: (uid)=>{},
    closeBuyWindow: ()=>{},
});

export const GeneralContextProvider = ({children}) =>{
    const [BuyWindowOpen,setBuyWindowOpen]=useState(false);
    const [UidWindow,setUidWindow]=useState(""); 

    const handleOpenWindow=(uid)=>{
        setBuyWindowOpen(true);
        setUidWindow(uid);
    }
    const handleCloseWindow=()=>{
        setBuyWindowOpen(false);
        setUidWindow(""); 
    }

    return(
        <GeneralContext.provider
        value={{
            openBuyWindow:handleOpenWindow,
            closeBuyWindow:handleCloseWindow, 
        }}>
            {children}

        {BuyWindowOpen && <SellActionWindow />}
            
        </GeneralContext.provider>
    )
}
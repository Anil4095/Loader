import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import '../App.css'




const GotoTop = () => {
    
     const scrollTop=()=>
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    
    return (
        <div>
          <a className="scroll-to-top rounded my-3" style={{display: "inline", justifyContent:"rignt"}} onClick={scrollTop}><ArrowUpwardIcon/></a>
        </div>
    )
}

export default GotoTop

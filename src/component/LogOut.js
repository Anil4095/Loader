import React, { useState } from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom';
import 'react-phone-number-input/style.css'


const LogOut = () => {
   const [mobile, setMobile] = useState()
   let history = useHistory();
   const handleClick = () => {

     

            history.push({
               pathname: './',
               
            
            })

      

   }
   
   return (
      <>
         <h1 style={{ marginLeft: "20%", marginTop: "auto" }}>Welcome, This is <span style={{ color: "red" }}>"IMG GLOBAL INFOTECH"</span></h1>
         <div className="login-div"
            style={{ padding: "30px 0px 0px 10px" }}>

            <div className="btn-div" style={{ padding: "20px 0 50px 32%",alignItems:"center" }}>
               <button style={{ height: "30px", width: "45%", borderRadius: "10px" }} onClick={handleClick} >Submit</button>
            </div>
         </div>



      </>
   )
}

export default LogOut;




import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import 'react-phone-number-input/style.css'


const Login = () => {
   const [mobile, setMobile] = useState()
   const [isLoading, setIsLoading]= useState(false)
   const [invalid, setInvalid]=useState()

   let history = useHistory();


   const handleClick = () => {
      setIsLoading(true)
     
      const telNo = mobile;
      const re = /^[0-9]+$/;
      
      if (telNo === '' || !re.test(telNo)) {
         console.log('invalid')
        setInvalid(true);
        setIsLoading(false)
        setMobile("")
      }else{
         setInvalid(false);

console.log('valid')
      const postNumber = {
         mobile,

      };
      axios.post(`http://143.110.244.110/tija/frontuser/loginuser`, postNumber)
         .then(response => {
             setIsLoading(false)
            let newData = response.data[0]

            history.push({
               pathname: './Confirmation',
               state:  newData,
               mobileNum:mobile
            })

         })
      }
   }
   const handleChange = ((e) => {
      
     
       

      
      setMobile(e.target.value)
      if (e.target.value.match(/^(\+\d{1,3}[- ]?)?\d{11}$/) && !(e.target.value.match(/0{5,}/))) {
         setMobile(true)
      }

   })
   return (
      <>
      
      
      < div style={{height:'80vh',display:'flex',justifyContent:'center' , flexDirection:'column',alignItems:'center'}}>
      <h1 style={{ marginTop: "auto" }}>Welcome, This is <span style={{ color: "red" }}>"IMG GLOBAL INFOTECH"</span></h1>

         <div className="login-div"
            style={{ padding: "30px 0px 0px 0px" }}>

            <form className="inp-fil"
            onSubmit={(e)=>{e.preventDefault()
            handleClick()}}
               style={{ paddingBottom: "30px",paddingLeft:"5%" }}>
               <h1 style={{color:"white"}}>{mobile}</h1>
             <input type="Phone" placeholder="Enter Mobile Number..." value={mobile} onChange={handleChange} />

               
           </form>

           



            <div className="btn-div" style={{ padding: "20px 0 0 32%" }}>
            {!isLoading &&   <button style={{ height: "30px", width: "55%",marginBottom:"20%", borderRadius: "10px" }} onClick={handleClick} >Submit</button>}
            </div>
            <div className="btn-div" style={{ padding: "20px 0 0 32%" }}>
            {isLoading &&   <button style={{ height: "30px", width: "55%",marginBottom:"20%", borderRadius: "10px" }} onClick={handleClick} disabled>Submiting...</button>}
               </div>
         </div>
      </div>

         <div style={{display:'flex',justifyContent:'center'}}>
{invalid?<span style={{color:"red"}}><h6>'please enter valid mobile number'</h6></span> : ''}
         </div>



      </>
   )
}

export default Login;




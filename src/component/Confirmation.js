import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
 



const Confirmation = (props) => {


  const [otp, setOtp] = useState()
  const [data, setData] = useState()
  const [mobileNum, setMobileNum] = useState()
  const [loading, setLoading] = useState(false)
  const [inval, setInval] = useState(false)


  let location = useLocation();
  let history = useHistory()


  const handleClick = () => {


    const postMessage = {
      otp: otp,
      tempuser: data.tempuser,
      newuser: data.newuser

    };
    setLoading(true)
    axios.post(`http://143.110.244.110/tija/frontuser/registeruser`, postMessage)
      .then(response => {
        let otpVerify = response.data[0]
        //setAuth(otpVerify.auth_key)
        setLoading(false)
        if (otpVerify.success) {
          localStorage.setItem("Auth", JSON.stringify(otpVerify.auth_key))
          props.setToken(otpVerify.auth_key);


          history.push({
            pathname: './'

          })

          //  alert(otpVerify.message)
        } else {
          setInval(true)
          setInval("Invalid OTP...")
          setOtp('')
        
        }
      })


  }
  useEffect(() => {
    setData(location.state)
    setMobileNum(location.mobileNum)
  }, [])




  return (
        <>

      < div style={{ height: '80vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginTop: "auto" }}>Welcome, This is <span style={{ color: "red" }}>"IMG GLOBAL INFOTECH"</span></h1>

        <div className="login-div"
          style={{ padding: "30px 0px 0px 0px" }}>

          <div className="inp-fil"
            style={{ paddingBottom: "30px", paddingLeft: "5%" }}>
            <input className="input-dis" type="text" value={mobileNum} disabled />
            <input type="text" placeholder="Enter OTP..." value={otp} onChange={(e) => setOtp(e.target.value)} />
          </div>



          <div className="btn-div" style={{ padding: "20px 0 0 32%" }}>
            {!loading && <button style={{ height: "30px", width: "45%", borderRadius: "10px", marginBottom: "20%" }} onClick={handleClick}>Verify</button>}

          </div>

          <div className="btn-div" style={{ padding: "20px 0 0 32%" }}>
            {loading && <button style={{ height: "30px", width: "45%", borderRadius: "10px", marginBottom: "20%" }} onClick={handleClick} disabled>Verifing...</button>}
          </div>
        </div>
       <h6 style={{color:"red"}}> {inval}</h6>
        </div>
      </>
      )
}

      export default Confirmation;

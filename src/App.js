import './App.css';
import{BrowserRouter, Route, Switch,Redirect} from "react-router-dom"


import Career from './component/Career';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/Login';
import User from './component/User';
import Confirmation from './component/Confirmation';
import { useState, useEffect } from 'react';





function App() {

  const [token,setToken]=useState()

  useEffect(() => {
    const localResItems = localStorage.getItem('Auth');

    if ( typeof (localResItems) !==undefined) {
      setToken(localResItems)
    }else{
      
        setToken(JSON.parse(localResItems));
        
  }},[])
  if(token){
    console.log('token exist')
    
  }else{
    console.log('token not exist ')
  
  }
  return (
    
    <>
    
        <BrowserRouter>
        <Navbar  authToken={token} setToken={setToken} />
        <Switch>

        {(token)?
         <>
        <Route exact path="/"  component={Home} />
      
          <Route exact path="/user" component={User}/>
          <Route exact path="/career"  component={Career}/>
          
          <Redirect to="/" />
          
           </> :
           <>
          <Route exact path="/confirmation"  render={()=><Confirmation setToken={setToken}/>}/>

          <Route   path="/login" component={Login}/>
          <Redirect to="/login" />

          

        </>
}
        </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;

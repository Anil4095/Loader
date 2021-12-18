import React  from 'react'
import Header from '../portfolio/Header'
import Page from '../portfolio/Page1'
import Prices from '../portfolio/Prices'
import Shop from '../portfolio/Shop'
import GotoTop from './GotoTop'



const Home = () => {
    
    

    return (
     
        <div className="my-lg-3 bg-opacity-10">

           
           
            
            <Page/>
        
            <Header/>
            
            <Prices/>
            <Shop/>
            <GotoTop/>  
        
        </div>
        
    )
}

export default Home

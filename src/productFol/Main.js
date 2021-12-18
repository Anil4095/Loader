import React from 'react'
import Cards from './Cards'
import './All.css';
import SerData from './SerData';


const  Main =()=> {
    return (
        <>
            <div className="Container">
                <h1 className='heading_style'>Welcome To <span Style={{Color:"red", marginTop:"150px"}}> "IMG GLOBAL OINFOTECH" </span></h1>
                {SerData.map((val) => {
                    return (
                        <Cards
                
                            imgsrc={val.imgsrc}
                            
                            title={val.title}
                        />)
                })}

            </div>
        </>
    )
}
export default Main;

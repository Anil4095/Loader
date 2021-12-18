import React from 'react'

function MapFun() {
    let Student=['Anil','Asish','Divyansh','Fahad']



    const handleClick=()=>{
     
    const newArr=Student.map((val,i)=>{
        return i+ " : " + val;
    })
    console.log(newArr)
    }

    return (
        <div>
          <button onClick={handleClick} >Click</button> 
        </div>
    )
}
export default MapFun;

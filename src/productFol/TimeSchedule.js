import React from 'react'

function TimeSchedule() {

    let curDate = new Date()
    curDate= curDate.getHours()
    let TimeShift={};
    
    const cssStyle={};


    if(curDate>1 && curDate<9){
        TimeShift='"Employee_1 Shift"';
        cssStyle.color='green'

    }else if(curDate >9 && curDate<17){
        TimeShift='"Employee_2 Shift"';
        cssStyle.color='Orange'

    }else{
        TimeShift='"Employee_3 Shift"'
        cssStyle.color='Brown'

    }
        
    
    return (
        <div>
            <h1>The Employee Time Shift is <span style={cssStyle}>{TimeShift}</span></h1>
        </div>
    )
}
export default TimeSchedule;

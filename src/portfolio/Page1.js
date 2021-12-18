import React  from "react";


const Page = () => {

 


  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-50" style={{paddingTop:"90px"}}>
             
            <h1 style={{fontSize:"20px"}}>WELCOME TO <span style={{color:"red", fontSize:"30px" }}>"IMG GLOBAL INFOTECH"</span></h1>
            <p>
            Established in 2014, IMG Global Infotech is a boutique IT company that collaborates with startups... 
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-primary">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6 my-5 " style={{paddingTop:"45px", paddingLeft:"120px"}}>
            <div className="about__img">
              <img src="https://th.bing.com/th?id=AnWbj97E%2fScp7ow480x360&rs=1&pid=ImgDet" alt="IMG" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

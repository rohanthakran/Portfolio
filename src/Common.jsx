import React from 'react';

const Common = (props) =>{
    return (
        <React.Fragment>
           <section id="header" className="d-flex align-self-center" style={{marginTop:"80px"}}>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.intro}</h1>
                            <h2 className="my-3">
                            We are the team of talent</h2>
                            <div className="mt-3">
                                <a href="/" className="btn btn-outline-primary">Get Started</a>
                            </div>
                            </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src ={props.imgr} className="img-fluid animated" alt="alternative"/>
                        </div>
                      
                            </div>
                        </div>
                    </div>
                </div>
            
           </section>
        </React.Fragment>
    )
}
export default Common;
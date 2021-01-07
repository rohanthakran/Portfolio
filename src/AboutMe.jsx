import React from  'react'
import img1 from "./dp.jpg"
const AboutMe =() =>{
        return(
            <React.Fragment>
                <section>
                    <div className="my-5">
                        <h1 className="text-center">About me</h1>
                    </div>
                   <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                            <div className="d-flex">
                            <img src={img1}class="rounded float-start" alt="..."/>
                            <div class="p-2">Fbout.me is a personal web hosting service co-founded by Ryan Freitas, Tony Conrad and Tim Young in October 2009.</div>
                            </div>
                            </div>
                            
                        </div>
                   </div> 
                </section>
            </React.Fragment>
        )
}
export default AboutMe
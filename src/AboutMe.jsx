import React from  'react'
import img1 from "./images/crop.jpg"
const AboutMe =() =>{
        return(
            <React.Fragment>
                <section>
                    <div className="my-5">
                        <h1 className="text-center">About me</h1>
                    </div>
                   <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 col-8 mx-auto">
                            <div className="d-flex">
                            <div className ="myimage">
                            <img src={img1}class="rounded float-start" alt="..."/>
                            </div>
                            <div class="p-4">Fbout.me is a personal web hosting service co-founded by Ryan Freitas, Tony Conrad and Tim Young in October 2009.</div>
                            </div>
                            </div>
                            
                        </div>
                   </div> 
                </section>
            </React.Fragment>
        )
}
export default AboutMe
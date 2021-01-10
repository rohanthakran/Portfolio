import React from  'react'
import img1 from "./images/crop.jpg"
import {Link} from  'react-router-dom'
const AboutMe =() =>{
        return(
            <React.Fragment>
                <section id="about">
                    
                    <div className="d-flex flex-column align-items-center justify-content-center " style={{height: "630px", margin :"7.5rem"}}>
                    <div className="my-5">
                        <h1 className="text-center">About me</h1>
                    </div>

                    <img src={img1} style={{ borderRadius: "50%"}} alt="..."/>
                    <div className="mt-5">
                    <div div className="col-lg-5 mx-auto">
                        <p>Hi! I am Rohan Thakran, a web developer/Mern Stack Developer focused on crafting great web experiences. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                    </div>
                        </div>
                    </div>          
                            
                
                </section>
            </React.Fragment>
        )
}
export default AboutMe
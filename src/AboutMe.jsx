import React from  'react'
import img1 from "./images/crop.jpg"
import {Link} from  'react-router-dom'
import {AiFillLinkedin,AiOutlineGithub} from 'react-icons/ai'
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

                     <div className="col-lg-2 text-center mx-auto icon2">
            <AiFillLinkedin style={{color:"black", fontSize:"40px", marginRight:"20px", cursor: "pointer",  border:"2px solid black", borderRadius:"50%",padding:"5px"}}/>
            <AiOutlineGithub style={{color:"black", fontSize:"40px", marginRight:"20px", cursor: "pointer", border:"2px solid black", borderRadius:"50%",padding:"5px"}}/>
                     </div>   
                    </div>          
                            
                
                </section>
            </React.Fragment>
        )
}
export default AboutMe
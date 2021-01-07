import React from 'react';
import img1 from './laptop.jpg'
import CardToll from './CardToll'
import Tool from './Tool';
const Projects = () =>{
    return (
        <React.Fragment>
           <div className ="my-5">
                <h1 className="text-center">Skills</h1>
           </div>
           <section id="card1">
           <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-5">
                           {Tool.map((val,inde) =>{
                               return(
                               <CardToll shot={val.imgsrc}
                                    title ={val.title}
                                    project = {val.projectname}/>
                               )
                           })}
                        </div>  

                    </div>
                    </div>
                </div>
                </section>

        </React.Fragment>
    )
}
export default Projects;
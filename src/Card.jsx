import React from 'react';
import {NavLink} from 'react-router-dom'
const Card =(props) =>{
    return (
        <React.Fragment>
  
                    <div className="col-sm-9 col-xs-4 col-md-4 col-lg-3 col-10 m-5">
                    <div className="card" >

                     <img src={props.shot} className="img-fluid" alt="Responsive image"/>
                     <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.project}</p>
                    <NavLink to=""className="btn btn-primary">Visit</NavLink>
            </div>
    </div>
  </div>
 
       </React.Fragment>
    )
}
export default Card;
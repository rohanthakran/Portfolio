import React from 'react';
import {NavLink} from 'react-router-dom'
const Card =(props) =>{
    return (
        <React.Fragment>
  
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                     <img src={props.shot}className="card-img-top" alt="..."/>
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
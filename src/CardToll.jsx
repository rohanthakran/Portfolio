import React from 'react';
import css  from './images/css3.svg';

const CardToll =(porps) =>{
    return (
        
        <React.Fragment>
        
      
    

  <div class="col-md-2 col-10 mx-auto">
  <section id="card1">
  <img src={porps.shot} className="img-fluid" alt="Responsive"/>
  <h1 className="text-center">{porps.title}</h1>
  </section> 
  </div>


           
        </React.Fragment>
    )
}
export default CardToll;
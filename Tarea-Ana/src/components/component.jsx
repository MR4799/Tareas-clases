import React from 'react'
import test from './testimonioDesing.module.scss';

function Test(props) {
  return (
    <>
    <section className={test.container__testimonios}>  
      <img 
      className={test.image__style}
      src={props.image} 
      alt="image" 
      />
    
      <div className={test.container__testim}>
        <p className={test.name__testim}><strong>{props.name}</strong> en {props.country}</p>
        <p className={test.cargo__testim}>{props.cargo} en <strong>{props.enterprise}</strong></p>
        <p className={test.testim}>"{props.test}"</p>
      </div>
    </section>
    </>
  );
}

export default Test
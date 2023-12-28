import React from 'react'
import happy from './img/sahil.gif';
// import year from './img/newyear.gif';
// import boom from './img/crackers.gif';
// import bom from './img/bom.gif';
import year from './img/gif.gif';
import './greeting.css'

function Greeting() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 text'>
                <div className='content relative'>
                    <img className='new-year' src={happy} alt='Not Found'></img>
                    <img className='year absolute' src={year} alt='not found'/>
                </div>

            </div>
        </div>
      
    </div>
    </>
  )
}

export default Greeting

import React from 'react'
import happy from './img/sahil.gif';
import year from './img/gif.gif';
import './greeting.css'
import './Messages'
import Messages from './Messages';

function Greeting() {
  const queryParameters = new URLSearchParams(window.location.search)
  const name = queryParameters.get("n");
  const fromName = queryParameters.get("f");
  console.log("data form URL", name, fromName);
  return (
    <>
      <div className='container-fluid'>
        <div className='row block'>
          <div className='col-md-12 text'>
            <div className='content relative'>
              { name && <span className='greeting-name'>Hey {name}</span>}
              <img className='new-year' src={happy} alt='Not Found'></img>
              <img className='year absolute' src={year} alt='not found' />
            </div>
          </div>
          <div className='msg'>
            <Messages fromName={fromName}/>
          </div>
          <div className='own'>
            <button>Create Your own</button>
          </div>

        </div>
      </div>


    </>
  )
}

export default Greeting

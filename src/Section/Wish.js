import React from 'react'
import happy from './img/asd.gif';
// import year from './img/newyear.gif';
import boom from './img/crackers.gif';
import bom from './img/bom.gif';
import year from './img/gif.gif';

// import './Section/wish.css';

function Wish() {
    return (
        <>
            <div className='container'>
                    <div className='content'>
                        <div className='greeting'>
                            <img className='happy' src={happy} alt='not found' />
                            <img className='year' src={year} alt='not found' />
                        </div>
                        {/* <div className='imgg'>
                            
                        </div> */}

                        <div className='wishes'>
                            <h3 className='text-blue-800 text-center'>Here's hoping that the new year brings us lots
                                of new and exciting opportunities in our lives.This
                                new year will be our year. Happy New Year!
                            </h3>
                            <img className='boom1' src={boom} alt='not found' />
                            <img className='boom2' src={bom} alt='not found' />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Wish

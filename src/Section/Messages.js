import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import wtsp from './img/whatsapp.gif'
import kodu from './img/kodulogo-removebg-preview.png'

const message = [
    'May each day of the new year be a canvas of beautiful moments, a masterpiece waiting to be painted. May you find the inspiration to create something amazing. Happy New Year!',
    'Here is to a year filled with laughter, love, and the fulfillment of your dreams. May your days be as bright as the sunshine and your nights as peaceful as the moonlight. Happy New Year!',
    'May the new year be a canvas for your dreams to come alive. Wishing you the courage to chase your passions and the strength to turn your dreams into reality. Happy New Year!',
    'May you enter the new year with a heart full of gratitude and grace. May each day bring you moments to cherish and reasons to be thankful. Happy New Year!',
    'As we celebrate the new year, let cherish the bonds that make our families special. May the coming year strengthen these ties and bring us closer together. Happy New Year!',
    'May the new year be a beacon of hope, lighting up your path with happiness and positivity. Wishing you a year filled with smiles and laughter.',
    'In the journey of life, may love be your constant companion and light up your days. Here to a year filled with love, joy, and beautiful moments. Happy New Year!',
    'May this year bring new happiness, new goals, new achievements, and a lot of new inspirations on your life. Wishing you a year fully loaded with happiness.',
];

function Messages(props) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const randomMsg = message[Math.floor(Math.random() * message.length)];
        setMessages([{ id: uuidv4(), text: randomMsg }]);
    }, []);

    const refreshPage = () => {
        const randomMsg = message[Math.floor(Math.random() * message.length)];
        setMessages([{ id: uuidv4(), text: randomMsg }]);
    };

    return (
        <>
            <div className='random-message'>
                <ul>
                    {messages.map((message) => (
                        <li key={message.id}>{message.text} <br />
                            <div className='sender'>
                                {props.fromName && <span className='person'>From {props.fromName}</span>}
                                <span><img className='icon' src={kodu} alt='not found' /></span>
                            </div></li>
                    ))}
                </ul>

            </div>
            {/* <div className='from'>
                <p></p>
            </div> */}
            <div className='next_btn'>
                <img className='wtsp_gif' src={wtsp} alt='Not Found'></img>
                <button className='btnn' onClick={refreshPage}>Next Greetings➡️</button>
            </div>
        </>
    );
}

export default Messages;

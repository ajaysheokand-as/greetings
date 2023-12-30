import React, { useState } from 'react';
import FriendList from '../components/FriendList';
import './form.css';
import new_year from '../images/02.gif';
import new_year2 from '../images/boldog.gif';
import light from '../images/lights.gif';
import bottom_img from '../images/superchat.gif';
import bottom_img2 from '../images/sbenv.gif';
import Messages from './Message';

function Form() {
    const [names, setNames] = useState('');
    const [fromName, setFromName] = useState('');
    const [displayedNames, setDisplayedNames] = useState([]);
    const [displayedFromName, setDisplayedFromName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const namesArray = names.split(',').map((name) => name.trim());
        setDisplayedNames(namesArray);
        setDisplayedFromName(fromName);
        setFormSubmitted(true);
    };

    return (
        <>
            <div className='form-content'>
                <div className='logo'>
                    <img src={new_year2} alt='happy' />
                    <img src={new_year} alt='happy' />
                    <img src={new_year2} alt='happy' />
                </div>
                <div className='outer_div'>
                    <img src={light} alt='light' />
                    <div className='main'>
                        {!formSubmitted && <form>
                            {/* {!formSubmitted ? null : ( */}
                            <>
                                <label htmlFor='toNames'>To:</label>
                                <input
                                    type='text'
                                    id='toNames'
                                    name='toNames'
                                    value={names}
                                    onChange={(e) => setNames(e.target.value)}
                                    required
                                />
                                <label htmlFor='fromName'>From:</label>
                                <input
                                    type='text'
                                    id='fromName'
                                    name='fromName'
                                    value={fromName}
                                    onChange={(e) => setFromName(e.target.value)}
                                    required
                                />
                                <br />
                                <div className='submit_btn'>
                                    <a href={`git ?n=${names}&f=${fromName}`} target='_blank' className='btn'>
                                        Create Your Own
                                    </a>
                                </div>
                            </>
                            {/* )} */}
                        </form>}
                        {formSubmitted && (
                        <div className='friend_names'>
                            {/* <Messages/> */}
                            {displayedNames.map((name, index) => (
                                <h4 key={index}>
                                    <a href={`https://first-wishes.com/happy-new-year?n=${name}`}>
                                        {name}
                                    </a>
                                </h4>
                            ))}
                            <h6 style={{ float: 'right' }}>From: {displayedFromName}</h6>
                        </div>
                        )}
                    </div>
                </div>
                <div className='bottom_logo'>
                    <img src={bottom_img} alt='img' />
                    <img src={bottom_img2} alt='img' />
                </div>
            </div>
        </>
    );
}

export default Form;

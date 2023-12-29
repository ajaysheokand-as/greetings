import React, { useState, useEffect } from 'react';
import './timer.css'

function TimeCount() {
    const targetDate = new Date('January 1, 2024 00:00:00').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    function calculateTimeRemaining() {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days: days < 10 ? `0${days}` : days,
            hours: hours < 10 ? `0${hours}` : hours,
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: seconds < 10 ? `0${seconds}` : seconds,
        };
    }
    return (
        <div className='counter_main'>
            <div className='name'>
                <div className='time'>
                    <div className='time_box'>
                        <span>{timeRemaining.days}</span><h4>Days</h4> {' '}
                    </div>
                    <div className='time_box'>
                        <span>{timeRemaining.hours}</span> <h4>Hours</h4> {' '}
                    </div>
                    <div className='time_box'>
                        <span>{timeRemaining.minutes}</span> <h4>Minutes</h4> {' '}
                    </div>
                    <div className='time_box'>
                        <span>{timeRemaining.seconds}</span> <h4>Seconds</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCount

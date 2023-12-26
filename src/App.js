import React, { useState } from 'react';
import './App.css';

function App() {
    const [names, setNames] = useState('');
    const [displayedNames, setDisplayedNames] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const namesArray = names.split(',').map(name => name.trim());
        setDisplayedNames(namesArray);
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="names">To:</label>
                    <input
                        type="text"
                        id="names"
                        name="names"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        required
                    />
                    <label htmlFor="names">From:</label>
                    <input
                        type="text"
                        id="names"
                        name="names"
                        // value={names}
                        // onChange={(e) => setNames(e.target.value)}
                        // required
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    {displayedNames.map((name, index) => (
                        <h4 key={index}>{name}</h4>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;

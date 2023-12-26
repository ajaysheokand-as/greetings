import React, { useState } from 'react';
import FriendList from './components/FriendList';
import './App.css';

function App() {
    const [names, setNames] = useState('');
    const [fromName, setFromName] = useState('');
    const [displayedNames, setDisplayedNames] = useState([]);
    const [displayedFromName, setDisplayedFromName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const namesArray = names.split(',').map(name => name.trim());
        setDisplayedNames(namesArray);
        setDisplayedFromName(fromName);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="toNames">To:</label>
                    <input
                        type="text"
                        id="toNames"
                        name="toNames"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        required
                    />
                    <label htmlFor="fromName">From:</label>
                    <input
                        type="text"
                        id="fromName"
                        name="fromName"
                        value={fromName}
                        onChange={(e) => setFromName(e.target.value)}
                        required
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <FriendList displayedNames={displayedNames} displayedFromName={displayedFromName} />

            </div>
        </>
    );
}

export default App;

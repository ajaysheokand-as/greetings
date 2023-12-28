import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import Home from './components/Home';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/friend' element={<FriendList />} /> */}
                </Routes>
            </Router>

        </>
    );
}

export default App;

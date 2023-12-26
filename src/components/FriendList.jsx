// FriendList.js
import React from 'react';

const FriendList = ({ displayedNames, displayedFromName }) => (
    <div className='friend_names'>
        {displayedNames.map((name, index) => (
            <h4 key={index}>{name}</h4>
        ))}
        <h6 style={{ float: 'right' }}>{displayedFromName}</h6>
    </div>
);

export default FriendList;

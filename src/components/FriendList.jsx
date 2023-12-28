import React from 'react';

function FriendList({ displayedNames, displayedFromName }) {
    return (
        <div className='friend_names'>
            {displayedNames.map((name, index) => (
                <h4 key={index}><a href='https://first-wishes.com/happy-new-year?n'>{name}</a></h4>
            ))}
            <h6 style={{ float: 'right' }}>{displayedFromName}</h6>
        </div>
    );
}

export default FriendList;

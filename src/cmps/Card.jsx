import React from 'react';

const Card = ({ number, suit }) => {
    const color = (suit === '♦' || suit === '♥') ? 'card-red' : 'card';
    if (!number) return null;
    return (
        <div className={color}>
            {number}{suit}
        </div>
    )
}
export default Card;
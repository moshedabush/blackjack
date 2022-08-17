import React from 'react';

const Card = ({ number, suit }) => {
    const color = (suit === '♦' || suit === '♥') ? 'card-red' : 'card';
    if (!number) return null;
    return (
        <div className={color}>
            <div className="card-number">{number}</div>
            <div className="card-suit">{suit}</div>
        </div>
    )
}
export default Card;
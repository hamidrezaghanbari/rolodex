import React from 'react'
import './card.styles.scss'

export const Card = (props) => (
    <div className="card-item">
        <div className="image-container">
            <img src="https://via.placeholder.com/150/09f/fff.png%20C/O%20https://placeholder.com/" />
        </div>
        <div className="details-section">
            <h1>{props.monster.name}</h1>
            <h4>{props.monster.email}</h4>
        </div>
    </div>
)
import React from 'react'
import './styles/card.css'

interface Props{
    cardImgSrc: string;
    header: string
    date: Date;
    time: Date;
}

const Card: React.FC<Props>  = ({cardImgSrc, time, date, header})=> {
  return (
    <div className='card'>
        <div className="card-img-box">
            <img src={cardImgSrc} alt="image" />
        </div>
        <div className="card-info-box">
            <h4 className="card-header">{header}</h4>
            <p>
                <span>{date.toLocaleDateString()}</span>
                <span>{time.toLocaleTimeString()}</span>
            </p>
        </div>
    </div>
  )
}

export default Card;
import React from 'react'
import './styles/deviderStrip.css'

interface Props{
    paragraph: JSX.Element;
    text: string;
}

const DeviderStrip: React.FC<Props> = ({text, paragraph})=> {
  return (
    <div className='devider-strip'>
        <h3>
            <span>{paragraph}</span>
            <span>{text}</span>
        </h3>
    </div>
  )
}

export default DeviderStrip;

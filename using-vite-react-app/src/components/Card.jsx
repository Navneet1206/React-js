import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
         <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" width="150px" alt="" />
      <h1>{props.title}</h1>
        <p>{props.Desc}</p>
    </div>
  )
}

export default Card

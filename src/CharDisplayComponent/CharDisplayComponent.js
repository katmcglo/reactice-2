import React from 'react';
import './CharDisplayComponent.css'

const CharDisplayComponent = (props) => {
  return (
    <div className="char-display-component" onClick={props.onClick}>
      <p>{props.char}</p>
    </div>
  )
}

export default CharDisplayComponent
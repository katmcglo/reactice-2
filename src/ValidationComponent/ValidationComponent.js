import React from 'react';

const ValidationComponent = (props) => {
  const displayText = props.displayText;
  const lengthValidationMessage = displayText.length > 5 ? "Text is too long" : "Text is too short";
  return (
    <div>
      <p>{lengthValidationMessage}</p>
    </div>
  )
}

export default ValidationComponent


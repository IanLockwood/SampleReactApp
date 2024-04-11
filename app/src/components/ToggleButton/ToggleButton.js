import React from 'react'
import './ToggleButton.css';


export const ToggleButton = ({
  text = "toggle",
  toggle,
  setToggle
}) => {

  return (
    <>
      <button className={"toggleButton"} onClick={setToggle}>
        Toggle
      </button>
    </>
  )
}

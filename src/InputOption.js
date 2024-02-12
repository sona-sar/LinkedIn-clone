import React from 'react'
import './InputOption.css'

function InputOption({ Icon, title, color, onClick }) { // Add onClick here in the props
  return (
    <div className="inputOption" onClick={onClick}> {/* Assign onClick to the div */}
        <Icon style={{ color: color }} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption

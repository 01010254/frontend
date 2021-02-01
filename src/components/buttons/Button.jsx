import React from 'react'
import './Button.css'




export default props => {

 

    return (
        <div className="btn-res">
            <label htmlFor="">{props.label}</label>
        <input  type="radio"
            onClick={e => props.click && props.click(props.label)}
            value={props.value}
            name={props.name}
            className="button">
        </input>
        </div>
    )
}

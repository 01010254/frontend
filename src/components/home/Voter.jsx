import React  from  'react'
import './Voter.css'
import User from './User'

export default props => {
    return (
    <React.Fragment>
    <div className="usuario">{props.value}</div>
    <User name={props.value}/>
    
    </React.Fragment>)
}
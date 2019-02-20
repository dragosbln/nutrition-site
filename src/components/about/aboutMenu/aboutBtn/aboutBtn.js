import React from 'react'
import {NavLink} from 'react-router-dom'
import './aboutBtn.css'

const aboutBtn = (props) => (
    <NavLink to={props.to} className='mAboutBtn'>
        <span className='emphasizedTxt'>{props.emphasized}</span> 
        <p className='unemphasizedTxt'>{props.unemphasized}</p>
    </NavLink>
)

export default aboutBtn;
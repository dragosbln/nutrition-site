import React from 'react'
import '../../../res/stylesheets/container.css'
import {NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './statement.css'

const statement = (props) => (
    <div className='mContainer'>
        <h1>Sth</h1>
        <hr />
        <p>sth more</p>
        <hr />
        <NavLink to='/about'><Button size='lg' variant="primary"><div className='leftArrow'></div></Button></NavLink>        

    </div>
)

export default statement;
import React from 'react'
import './landing-header.css'
import '../../res/stylesheets/container.css'
import {Button} from 'react-bootstrap'
import {Mission} from '../../res/text/Texts'
import {NavLink} from 'react-router-dom'

const landingHeader = () => (
    <div className='mContainer'>
          <h1 className="LandingTxt">Welcome to ProPer Nutrition!</h1>
          <hr />
          <h6 className="LandingTxt">{Mission}</h6>
          <hr />
          <h4 className="LandingTxt">Dar mai întâi, avem nevoie de ajutorul tău!</h4>
          <NavLink  to='/start/join'><Button size="lg" className="LandingTxt" variant="primary">Alătură-te nouă!</Button></NavLink>
          
    </div>
);

export default landingHeader;
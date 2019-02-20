import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import '../../../res/stylesheets/container.css'
import AboutBtn from './aboutBtn/aboutBtn'
import './aboutMenu.css'

const  aboutMenu = (props) => (
    <div className='mContainer mAbout'>
        <h1>Cunoaste-ne mai bine!</h1>
        <hr />
        <AboutBtn to={props.match.url + '/why'} emphasized='DE CE' unemphasized='existam?' />
        <AboutBtn to={props.match.url + '/how'} emphasized='CUM' unemphasized='te vom ajuta pe tine?' />
        <AboutBtn to={props.match.url + '/what'} emphasized='PRIN CE' unemphasized='o vom face, mai exact?' />
        <AboutBtn to={props.match.url + '/facts'} emphasized='FUN FACTS' unemphasized='in caz ca "nu ai nevoie de ajutor"' />
        <hr />
        <NavLink to='/'><Button size='lg' variant="primary">Alatura-te noua!</Button></NavLink>     
    </div>
);

export default withRouter(aboutMenu);
import React from 'react'
import './layout.css'

const layout = (props) => (
    <>
        <ul className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {props.children}
    </>
)

export default layout;
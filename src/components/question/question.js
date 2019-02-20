import React from 'react'
import { Form } from 'react-bootstrap'
import './question.css'


const question = (props) => {
    const classes=['question'];
    if(!props.selected && props.touched){
        classes.push('invalid')
    }
    return (
        <Form.Group onChange={props.changed} className={classes.join(' ')}>
            <Form.Label >
                {props.question}
            </Form.Label>
            {props.options.map((option, id) => (
                <Form.Check
                    key={id}
                    className="option"
                    type="radio"
                    name={props.id}
                    label={option}
                    id={id === 0 ? '0' : id} />
            ))}
        </Form.Group>
    );
}


export default question;
import React from 'react'
import './Input.css'
import { Form, Col, Row } from 'react-bootstrap'

//props: labelWeight/controlWeight: bootstrap grid weight

const input = (props) => {

    const inputClasses=[props.small ? 'smallInput' : 'normalInput'];
    const errMsgClasses=['errMsg'];

    if(props.invalid && props.shouldValidate && props.touched){
        errMsgClasses.push('showErr');
        inputClasses.push('invalid');
    }

    return (
        <Form.Group as={Row} controlId={props.controlId}>
            <Form.Label className="emphasizedNormal" column sm={props.labeWeight} >
                {props.label}
            </Form.Label>
            <Col sm={props.controlWeight}>
                <Form.Control value={props.value} onChange={props.changed} as={props.as ? props.as : 'input'} className={inputClasses.join(' ')} type={props.type} placeholder={props.placeholder} />
            </Col>
        </Form.Group>
    );
}

export default input;
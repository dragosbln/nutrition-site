import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import {inputChangedHandler} from '../../utils/utils'
import '../../res/stylesheets/container.css'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import './contact.css'

class Contact extends Component {

    state = {
        form: {
            name: {
                elementConfig: {
                    label: 'Nume:',
                    type: 'text',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementConfig: {
                    label: 'E-mail:',
                    type: 'email',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            message: {
                as: 'textarea',
                elementConfig: {
                    label: 'Mesaj:',
                    type: 'tel',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: true,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.formIsValid) {
            const data = {}
            for(let key in this.state.form){
                data[key] = this.state.form[key].value;
            }
            axios.post('https://nutritionstartup.firebaseio.com/conatct.json', data)
                .then(()=>{
                    this.props.history.push('/start/share');
                })
                .catch((err) => {
                    console.log(err);
                })

        } else {
            const updatedForm = { ...this.state.form }
            for (let key in updatedForm) {
                updatedForm[key].touched = true;
            }
            this.setState({ form: updatedForm })
        }
    }

    render() {

        const elemsArray = [];
        for (let key in this.state.form) {
            elemsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        const form = (
            <Form onSubmit={this.submitHandler}>
                {elemsArray.map((elem, i) => (
                    <Input
                        key={i}
                        type={elem.config.elementConfig.type}
                        label={elem.config.elementConfig.label}
                        labelWeight="4"
                        controlWeight="8"
                        value={elem.config.value}
                        invalid={!elem.config.valid}
                        shouldValidate={elem.config.validation}
                        touched={elem.config.touched}
                        changed={(event) => inputChangedHandler(this, event, elem.id)}
                        as={elem.config.as ? elem.config.as : null}
                    />
                ))}
                <hr />
                <Button size='lg' variant="primary" type="submit">Continua</Button>

            </Form>
        )

        return (
            <div className='mContainer mContact'>
                <h1>Ai vreo sugestie? Nu ezita!</h1>
                <hr />
                {/* <Input type='text' labelWeight='3' controlWeight='9' label='Nume:' />
                <Input type='email' labelWeight='3' controlWeight='9' label='E-mail:' />
                <Input  as='textarea' type='text' labelWeight='3' controlWeight='9' label='Mesaj:' />
                <NavLink to="/start/share">
                    <Button size='lg' variant="primary" type="submit">Trimite!</Button>
                </NavLink> */}
                {form}
            </div>
        )
    };
}

export default Contact;
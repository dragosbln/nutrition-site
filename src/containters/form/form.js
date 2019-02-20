import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {inputChangedHandler} from '../../utils/utils'
import '../../res/stylesheets/container.css'
import Input from '../../components/Input/Input'
import {withRouter} from 'react-router-dom'
import { Disclaimer } from '../../res/text/Texts'
import './form.css'


class myForm extends Component {
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
            surname: {
                elementConfig: {
                    label: 'Prenume:',
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
            phone: {
                elementConfig: {
                    label: 'Numar de telefon:',
                    type: 'tel',
                },
                value: '',
                validation: {},
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
            const data = {};
            for(let key in this.state.form){
                data[key] = this.state.form[key].value;
            }
            this.props.submitAll(data);
            this.props.history.push('/start/share');
        } else {
            const updatedForm = { ...this.state.form }
            for (let key in updatedForm) {
                updatedForm[key].touched = true;
            }
            this.setState({ form: updatedForm })
        }
    }

    onDontWantPressed = () =>{
        this.props.submitAll({});
        this.props.history.push('/start/share');
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
                    />
                ))}
                <Button size='lg' variant="primary" type="submit">Trimite!</Button>
                <Button size='lg' variant="primary" onClick={this.onDontWantPressed}>Nu doresc sa ma contactati</Button>

            </Form>
        )
        return (
            <div className="mContainer">
                <div>
                    <h1>Date de contact:</h1>
                </div>
                <div className="disclaimer">
                    <p>{Disclaimer}</p>
                </div>
                {form}
            </div>
        );
    }

    
}


export default withRouter(myForm);
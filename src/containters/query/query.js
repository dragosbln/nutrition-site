import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { inputChangedHandler } from '../../utils/utils'
import Input from '../../components/Input/Input'
import '../../res/stylesheets/container.css'
import Question from '../../components/question/question'
import questions from '../../res/text/questions'
import './query.css'

class query extends Component {
    constructor(props) {
        super(props);

        const qs = {};
        questions.map((question, id) => {
            qs[id] = {
                question: question.question,
                options: question.options,
                optionId: null,
                touched: false
            }
        })
        this.state = {
            form: {
                ocupation: {
                    elementConfig: {
                        label: 'Ocupatie:',
                        type: 'text',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                age: {
                    elementConfig: {
                        label: 'Varsta:',
                        type: 'number',
                    },
                    value: '',
                    validation: {
                        required: true,
                        isNumeric: true
                    },
                    valid: false,
                    touched: false
                },
            },
            formIsValid: false,
            questions: qs,
            allValid: false
        }

    }

    optionChangedHandler = (event, qestionId) => {
        const updatedQuestions = { ...this.state.questions };
        const updatedQuestion = updatedQuestions[qestionId];
        updatedQuestion.optionId = event.target.id;
        updatedQuestion.touched = true;
        updatedQuestions[qestionId] = updatedQuestion;
        this.setState({ questions: updatedQuestions });
        if (this.state.formIsValid) {
            var allValid = true;
            for (let q in this.state.questions) {
                if (this.state.questions[q].optionId===null) {
                    allValid = false;
                    break;
                }
            }
            this.setState({ allValid: allValid });
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.allValid) {
            const toSubmit = {};
            for(let k in this.state.form){
                toSubmit[k] = this.state.form[k].value;
            }
            toSubmit.questions = {};
            for(let k in this.state.questions){
                toSubmit.questions[k]={};
                toSubmit.questions[k]['question']=this.state.questions[k].question;
                toSubmit.questions[k]['answer']=this.state.questions[k].options[this.state.questions[k].optionId];
            }
            this.props.submitQuery(toSubmit);
            this.props.history.push('/start/contact');
        } else {
            if (!this.state.formIsValid) {
                const updatedForm = { ...this.state.form }
                for (let key in updatedForm) {
                    updatedForm[key].touched = true;
                }
                this.setState({ form: updatedForm })
                window.scrollTo(0,0)
            } else{
                const updatedQuestions = {...this.state.questions};
                for(let key in updatedQuestions){
                    updatedQuestions[key].touched=true;
                }
                this.setState({questions: updatedQuestions});
            }
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

        const questionsArray = [];
        for(let key in this.state.questions){
            questionsArray.push({
                key: key,
                question: this.state.questions[key]
            })
        }

        return (
            <div className="mContainer mQuery">
                <Form onSubmit={this.submitHandler}>
                    {elemsArray.map((elem, i) => (
                        <Input
                            key={i}
                            type={elem.config.elementConfig.type}
                            label={elem.config.elementConfig.label}
                            labelWeight="4"
                            controlWeight='8'
                            small={elem.id === 'age' ? true : false}
                            value={elem.config.value}
                            invalid={!elem.config.valid}
                            shouldValidate={elem.config.validation}
                            touched={elem.config.touched}
                            changed={(event) => inputChangedHandler(this, event, elem.id)}
                        />
                    ))}
                    {questionsArray.map((question) => (
                        <Question
                            key={question.key}
                            changed={(event) => this.optionChangedHandler(event, question.key)}
                            selected={question.question.optionId !== null}
                            touched={question.question.touched}
                            question={question.question.question}
                            options={question.question.options}
                            id={question.key} />
                    ))}
                    <Button size='lg' variant="primary" type="submit">Continua</Button>
                </Form>

            </div>
        )

    }
}
export default withRouter(query);
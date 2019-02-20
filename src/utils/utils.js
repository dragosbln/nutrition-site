const validate = (value, rules) => {
        var isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.length) {
            isValid = value.length === rules.length && isValid;
        }
        return isValid;
    }


export const inputChangedHandler = (obj, event, id) => {
    const updatedForm = {
        ...obj.state.form
    };
    const updatedelem = {
        ...updatedForm[id]
    };
    updatedelem.value = event.target.value;
    updatedelem.valid = validate(updatedelem.value, updatedelem.validation);
    updatedelem.touched = true;
    updatedForm[id] = updatedelem;

    let formIsValid = true;
    for (let id in updatedForm) {
        formIsValid = updatedForm[id].valid && formIsValid;
    }
    obj.setState({ form: updatedForm, formIsValid: formIsValid });
}

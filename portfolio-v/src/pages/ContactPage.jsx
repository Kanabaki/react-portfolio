import { useState } from 'react';

const validateEmail = function (email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email)
}

function validateField(fieldId) {
    const field = document.getElementById(`${fieldId}-input`);
// get email err
    const errorSpan = document.getElementById(`${fieldId}-error`);

// (`${fieldId}Error`) = (`${emailField}Error`)

    if (field.value.trim() === '') {
      errorSpan.style.display = 'inline';
    } else {
      errorSpan.style.display = 'none';
    }
  }

export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (!validateEmail(email) ) {
            setErrorMessage('Email is invalid');
            return;
        }
        // if (!checkPassword(name)) {
        //     setErrorMessage(
        //         `nameErrMssg: ${userName}`
        //     );
        //     return;
        // }

        // If successful, we reset the form after submit.
        setName('');
        setEmail('');
        setMessage('');
        alert(`Hello ${name}, thank you for filling out the form!`);
    };

{/* EXAMPLE FOR validateField 
<input type="text"
 id="emailField" 
 onblur="validateField('emailField')" 
 required>
<span id="emailError" style="color: red; display: none;">
    Email is required
</span> */}


// TO DO: move the email span down
// work sequentially 
return (
    <div>
        <h1>Contact Page</h1>
            <form onSubmit={handleFormSubmit}>
            <input
                id="name-input" 
                value={name}
                name="name"
                placeholder="name"
                type="text"
                onChange={handleInputChange}
                onBlur={()=> validateField('name')}
                required
            />
            <span id="name-error" style={{color: "red" , display: "none" }}>
                Name is required!
            </span>
            <input
                id="email-input" 
                value={email}
                name="email"
                placeholder="email"
                type="email"
                onChange={handleInputChange}
                onBlur={()=> validateField('email')}
                required
            />
             <span id="email-error" style={{color: "red" , display: "none" }}>
                Email is required!
            </span>
            <input
                id="message-input"
                value={message}
                name="message"
                placeholder='message'
                type="message"
                onChange={handleInputChange}
                onBlur={()=> validateField('message')}
                required
            />
             <span id="message-error" style={{color: "red" , display: "none" }}>
                Message is required!
            </span>
            <button type="submit">
                Submit
            </button>
            </form>
        {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
    </div>
);
}
// ref 16, 

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

// CHECK the web console for errors, it will LITERALLY TELL YOU WHAT YOU NEED TO FIX!
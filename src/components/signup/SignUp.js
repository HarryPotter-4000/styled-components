import React, { useState } from 'react';
import {
  StyledFormWrapper,
  StyledForm,
  StyledLock,
  StyledH2,
  StyledError,
  StyledInput,
  StyledInputSecond,
  StyledFieldset,
  StyledFieldRow,
  StyledButton,
  StyleClueBoxUp,
  StyleFooter
} from '../styles.js';

const initalState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  receive: ''
};
function SignUp() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');

    console.log("Succeeded!!!")
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (value !== '') {
      setState(prev => ({ ...prev, [inputName]: value }));
    } else {
      setState(prev => ({ ...prev, }));
    }
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLock><i className="fas fa-lock"></i></StyledLock>
          <StyledH2>Sign up</StyledH2>
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledFieldRow>
            <StyledInput
              type="firstname"
              name="firstname"
              value={state.firstname}
              onChange={handleInput}
              placeholder='First Name*'
            />
            <StyledInputSecond
              type="lasttname"
              name="lasttname"
              value={state.lastname}
              onChange={handleInput}
              placeholder='Last name*'
            />
          </StyledFieldRow>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder='Email address*'
          />
          <StyledInput
            type="text"
            name="name"
            value={state.password}
            onChange={handleInput}
            placeholder='Password*'
          />
          <StyledFieldset>
            <label>I want to receive inspiration, marketing promotions and updates via email.</label>
            <label>
              <input
                type="radio"
                value="checked"
                name="remember"
                checked={state.remember === 'checked'}
                onChange={handleInput}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="unchecked"
                name="remember"
                checked={state.remember === 'unchecked'}
                onChange={handleInput}
              />
              No
            </label>
          </StyledFieldset>

          <StyledButton type="submit">SIGN UP</StyledButton>
          <StyleClueBoxUp>
            <p>Already have an account? Sign in</p>
          </StyleClueBoxUp>
          <StyleFooter>Copiright 	&copy; Your Website 2022.</StyleFooter>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default SignUp;
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

  const handleInput = event => {
    const { currentTarget } = event;
    const { type, name, value } = currentTarget;
    setState(prev => ({
      ...prev,
      [name]: (
        type === 'checkbox'
          ? currentTarget.checked
          : value
      )
    }));
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
              type="text"
              name="firstname"
              value={state.firstname}
              onChange={handleInput}
              placeholder='First Name*'
            />
            <StyledInputSecond
              type="text"
              name="lastname"
              value={state.lastname}
              onChange={handleInput}
              placeholder='Last name*'
            />
          </StyledFieldRow>
          <StyledInput
            type="text"
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder='Email address*'
          />
          <StyledInput
            type="text"
            name="password"
            value={state.password}
            onChange={handleInput}
            placeholder='Password*'
          />
          <StyledFieldset>
            <label>
              <input
                type="checkbox"
                name="receive"
                checked={state.receive}
                onChange={handleInput}
              />
              I want to receive inspiration, marketing promotions and updates via email.
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
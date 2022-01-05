import React, { useState } from 'react';
import {
  StyledFormWrapper,
  StyledForm,
  StyledLock,
  StyledH2,
  StyledError,
  StyledInput,
  StyledFieldset,
  StyledButton,
  StyleClueBox,
  StyleFooter
} from '../styles.js';

const initalState = {
  email: '',
  password: '',
  remember: false,
};
function SignIn() {
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
          <StyledH2>Sign in</StyledH2>
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledInput
            type="text"
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder='Email address*'
          />
          <StyledInput
            type="password"
            name="password"
            value={state.password}
            onChange={handleInput}
            placeholder='Password*'
          />

          <StyledFieldset>
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={state.remember}
                onChange={handleInput}
              />
              Remember Me
            </label>
          </StyledFieldset>

          <StyledButton type="submit">SIGN IN</StyledButton>
          <StyleClueBox>
            <p>Forgot password?</p>
            <p>Don't have an account? Sign Up</p>
          </StyleClueBox>
          <StyleFooter>Copiright 	&copy; Your Website 2022.</StyleFooter>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default SignIn;
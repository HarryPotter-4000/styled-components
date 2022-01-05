import styled, { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto';
    font-size: 16px;
    
  }
`;

export const Container = styled.div`
  background-color: #121212;
  font-family: Roboto;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const StyledForm = styled.form`
  width: 100%;
  background-color: #121212;
  max-width: 400px;
  padding: 48px;
  
`;
export const StyledLock = styled.div`
  text-align: center;
  i {
    font-size: 24px;
    padding: 14px 16px;
    background-color: #f48fb2;
    border-radius: 50%;
  }
`
export const StyledH2 = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #fff;
  margin: 16px 0 24px;
`
const sharedStyles = css`
  display: block;
  width: 100%;
  height: 40px;
  color: #a0a0a0;
  background-color: #121212;
  border: 1px solid rgb(160 160 160 / 37%);
  border-radius: 3px;
  padding: 16px;
`;

export const StyledInput = styled.input`
  margin: 8px 8px 16px 0;
  ${sharedStyles}
`;
export const StyledInputSecond = styled.input`
  margin: 8px 0px 8px;
  ${sharedStyles}
`
export const StyledButton = styled.button`
  display: block;
  width: 100%;
  background-color: #90caf9;
  color: #121212;
  font-size: 13px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  height: 32px;
  padding: 0 16px;
  cursor: pointer;
`;
export const StyledFieldRow = styled.fieldset`
  display: flex;
  justify-content: spase-between;
  font-size: 14px;
  border: none;
  color: #fff;
  margin: 0;
  label {
    padding-right: 16px;
  }

`
export const StyledFieldset = styled.fieldset`
  display: flex;
  padding: 8px 0 0;
  font-size: 14px;
  margin: 16px 0;
  border: none;
  color: #fff;
  label {
    padding-right: 16px;
  }
  input {
    margin-right: 8px;
  }
`;
export const StyledError = styled.div`
  color: red;
  font-weight: 500;
  margin: 0 0 24px 0;
`;
export const StyleClueBox = styled.div`
  display:flex;
  justify-content: space-between;
  p {
    font-size: 12px;
    color: #90caf9;
  }
  margin: 12px 0
`
export const StyleClueBoxUp = styled.div`
  display:flex;
  justify-content: flex-end;
  p {
    font-size: 12px;
    color: #90caf9;
  }
  margin: 12px 0
`
export const StyleFooter = styled.div`
  text-align: center;
  color: #a0a0a0;
  margin-top: 48px;
`
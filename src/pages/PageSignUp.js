import SignUp from "../components/signup/SignUp";
import styled from 'styled-components';
import '../index.css'

const Container = styled.div`
  background-color: #121212;
  font-family: Roboto;
`

function PageSignUp() {
  return (
    <Container>
      <SignUp />
    </Container>
  )
}

export default PageSignUp;

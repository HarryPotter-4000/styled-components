import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import PageSignIn from './pages/PageSignIn';
import PageSignUp from './pages/PageSignUp';
import Header from './components/header/Header'
import { createGlobalStyle } from 'styled-components';
import './index.css'

const GlobalStyle = createGlobalStyle`
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

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={ <PageSignUp title='Sign in' /> } />
          <Route path="/signin" element={ <PageSignIn title='Sign in' /> } />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
    
  );
}

export default App;
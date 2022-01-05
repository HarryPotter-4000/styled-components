import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import '../../index.css'

const Nav = styled.header`
font-family: Roboto;
  width: 100%;
  background-color: #121212;
  text-align: center;
  padding: 16px;
  color: #f48fb2
`
const List = styled.ul`
  font-size: 16px;
  a{
    text-decoration: none;
    color: #121212;
    background-color: #90caf9;
    padding: 16px;

    &:hover{
      background-color: #f48fb2;
      color: #121212;
    }
  }
`;

function Header() {
  return (
    <Nav>
      <List>
        <Link to='/signin'>Sign in</Link>
        <Link to='/signup'>Sign up</Link>
      </List>
    </Nav>
    
  )
}

export default Header;
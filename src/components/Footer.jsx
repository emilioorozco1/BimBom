import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogOutButton from "../users/LogOutButton";

let FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: minmax(auto,1fr) auto  minmax(auto,1fr);
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.gray };
  height: 3em;
  text-align:center;
  justify-content:space-around;
  align-items:center;
`;

let NEWButton = styled(Link)`
  border-radius:${({ theme }) => theme.dims.borderRadius.normal };
  padding: ${({theme}) => theme.dims.padding.largePadding };
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display:flex;
  font-size:1.5em;
  align-items:center;
  justify-content:center;
  border:0;
  box-shadow:${({ theme }) => theme.shadows.depth2};
  cursor:pointer;
  position: relative;
  top:-1em;
  font-size:22px;
  text-decoration:none;
  z-index:1;
  transform-style: preserve-3d;
`;

let CenteredFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.dims.padding.largePadding };
  text-align: center;
`;



let LoggedInFooter = ()=> <FooterContainer>
  <Link to="/videos"> Home </Link>
  <NEWButton to="/videos/new"> + </NEWButton>
  <Link to="/users/profile"> Profile </Link>
  <LogOutButton></LogOutButton>
</FooterContainer>;

let LoggedOutFooter = ()=> <CenteredFooter>
  <Routes>
    <Route path="/users/register" element={<p>You have an account? <Link to="/users/login">Login</Link> </p>}></Route>
    <Route path="/users/login" element={<p>Don´t have an account? <Link to="/users/register">Create an account</Link> </p>}></Route>
  </Routes>
  </CenteredFooter>

let Footer = (props) => {
  let user = useSelector(state => state.user.user);
  return(
    user ? <LoggedInFooter /> : <LoggedOutFooter></LoggedOutFooter>
  )
}

export default Footer;

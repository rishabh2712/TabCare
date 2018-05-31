import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';


const NavBar = styled.nav`
  position: fixed;
  top:0px;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 66px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
`

const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    align-items: center;
`



const Header = () => (
    <NavBar>
        <NavBox>
            <div>Logo</div>
            <div>Cera</div>
            <div>Logout</div>
        </NavBox>
    </NavBar>
)

export default Header
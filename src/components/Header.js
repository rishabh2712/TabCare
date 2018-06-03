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
const Logo =  styled.div`
width: 72px;
height: 52px;
`

const Header = () => (
    <NavBar>
        <NavBox>
            <div><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"}/></div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="17" viewBox="0 0 47 17">
                    <text fill="#1A1A1A" fill-rule="evenodd" font-family="SFUIText-Semibold, SF UI Text" font-size="22" font-weight="500" letter-spacing="-.528" transform="translate(-504 -18)">
                        <tspan x="503" y="34">Cera</tspan>
                    </text>
                </svg>
            </div>
            <div>Logout</div>
        </NavBox>
    </NavBar>
)

export default Header
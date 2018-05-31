import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Header from '../../components/Header'
import CareReport from '../CareReport'

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Content =  styled.div`
    display: flex;
    padding-top: 66px;
    width: 75%;
`

const App = () => (
    <AppContainer>
        <Header />
        <Content >
            
        </Content>
    </AppContainer>
);

export default App;
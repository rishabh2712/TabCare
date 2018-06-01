import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header'
import CareReport from '../CareReport'
import {loadApp} from './actions'

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Content =  styled.div`
    display: flex;
    padding-top: 66px;
    width: 75%;
`

class App extends Component {
    componentDidMount() {
        this.props.loadApp()
    }
    render() {
        return(
            <AppContainer>
                <Header />
                <Content >
                    <Switch>
                        <Route path='/' component = {CareReport} />               
                    </Switch>
                </Content>
            </AppContainer>

        )
    }
}

const mapStateToProps = state => {
    return {
      data : state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
     loadApp : () => dispatch(loadApp)
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

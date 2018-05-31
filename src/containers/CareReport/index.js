import styled from 'styled-components';
import React, { Component } from 'react';

import Notifications from '../Notifications'

const ReportContainer = styled.div`
` 


export default class CareReport extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return(
        <ReportContainer>
            <Notifications />
            <Switch>
                <Route route='/' component={} />
                <Route route='/:id' component={} />
            </Switch>
        </ReportContainer>
        )
    }
}
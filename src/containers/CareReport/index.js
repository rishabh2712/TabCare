import styled from 'styled-components';
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Notifications from '../Notifications'
import Residents from '../Residents'
import ResidentView from '../ResidentView'

const ReportContainer = styled.div`
` 

class CareReport extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return(
        <ReportContainer>
            <Notifications />
            <Switch>
                <Route path='/residents' component={Residents} />
                <Route exact path={`${this.props.match.url}resident/:id`} component={ResidentView} />
            </Switch>
        </ReportContainer>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {

    }
}
   

export default withRouter(connect(mapStateToProps)(CareReport))

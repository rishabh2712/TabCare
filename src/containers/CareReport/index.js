import styled from 'styled-components';
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BreadCrumbs from '../../components/BreadCrumbs'
import Notifications from '../Notifications'
import Residents from '../Residents'
import ResidentView from '../ResidentView'

const ReportContainer = styled.div`
    width: 100%;
` 
const ResidentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40%;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
`

class CareReport extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        console.log("heheh");
        
        return(
        <ReportContainer>
            <Notifications />
            <BreadCrumbs 
                crumbs = {[
                    {
                        label: 'Residents',
                        route: '/residents'
                    },
                    {
                        label: 'Oliver',
                        route: '/residents'
                    }
                ]}
            />
            <ResidentContainer>
                <Switch>
                    <Route path='/residents' component={Residents} />
                    <Route exact path={`${this.props.match.url}resident/:id`} component={ResidentView} />
                </Switch>
            </ResidentContainer>
        </ReportContainer>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {

    }
}
   

export default withRouter(connect(mapStateToProps)(CareReport))

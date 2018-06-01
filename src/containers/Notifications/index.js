import styled from 'styled-components';
import React, { Component } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs'
import {connect} from 'react-redux'
import {fetchNotifications} from './actions'

const NotificationsContainer = styled.div`
    

`
const NotificationsContent = styled.div`
    width: inherit;
    background-color: #ffffff;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
`
const NotificationCard =  styled.div`
  height: 74px;
  border-radius: 4px;
`

class Notifications extends Component {
    constructor(props) {
        super()
    }

    componentDidMount() {
        this.props.fetchNotifications()
    }

    render() {
        console.log(this.props)
            
        return (
            <NotificationsContainer>
                <BreadCrumbs>
                    Notifications
                </BreadCrumbs>
                <NotificationsContent>

                </NotificationsContent>
            </NotificationsContainer>
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
     fetchNotifications : () => dispatch(fetchNotifications())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notifications)

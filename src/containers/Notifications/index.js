import styled from 'styled-components';
import React, { Component } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs'
import NotificationList from './NotificationList'
import Loading from '../../components/Loading.jsx'
import {connect} from 'react-redux'
import {fetchNotifications} from './actions'


const NotificationsContainer = styled.div`
    width: 100%
`

const NotificationsContent = styled.div`
    min-height: 130px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.12);
`

class Notifications extends Component {
constructor(props) {
    super()
}

componentDidMount() {
    this.props.fetchNotifications()
}

render() {
    let {isLoading, items, success, error} = this.props.notifications   
        return (
            <NotificationsContainer>
                <BreadCrumbs>
                    Notifications
                </BreadCrumbs>
                <NotificationsContent>
                  {isLoading ? <Loading /> : 
                    !isLoading && !items.length ? <div> No records found</div> :
                    error ? <div>Something went wrong</div> :
                    <NotificationList items={items}/>
                  }
                </NotificationsContent>
            </NotificationsContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
      notifications : state.notifications
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

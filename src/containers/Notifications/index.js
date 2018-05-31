import styled from 'styled-components';
import React, { Component } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs'


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

export default class Notifications extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <NotificationsContainer>
                <BreadCrumbs>
                    Notifications
                </BreadCrumbs>
                <NotificationsContent></NotificationsContent>
            </NotificationsContainer>
        )
    }
}
import React, {Component} from 'react'
import styled from 'styled-components'

const NotificationContent =  styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  min-height: 74px;
  margin: 0px 10px 10px 0px;
  padding: ${props => props.item.status === 'critical' ? '10px 0px 10px 12px' : '10px 0px 10px 19px' }; 
  border-radius: 4px;
  background-color: ${props => props.item.status === 'critical' ? '#ff1d1d' : '#f3f3f4'};
}
`
const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color:  ${props => props.item.status === 'critical' ? '#ffffff' : '#464646'};
`
const CardSubTitle = styled.div`
font-size: 13px;
font-weight: 800;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color:  ${props => props.item.status === 'critical' ? '#ffffff': props.item.status === 'normal' ? '#32bc9d':'#ffa200'}; 
`
const CardDate = styled.div`
font-size: 9px;
font-weight: 500;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color: #464646;
padding-top: 11px;
`
const LeftBar = styled.div`
width: 7px;
background-color: ${props => props.item.status === 'normal' ? '#11ca8e': '#ffa200'};
display: ${props => props.item.status === 'critical' ? 'none' : 'block'};
`

const NotificationCard = (item) => {
    let obj = item.item
    return (
        <NotificationContent item={obj}>
            <LeftBar item={obj}/>
            <div>
                <CardTitle item={obj}>{obj.name}</CardTitle>
                <CardSubTitle item={obj}>{obj.condition}</CardSubTitle>
                <CardDate>{obj.date}, {obj.time}</CardDate>
            </div>
        </NotificationContent>
    )    
}
const NotificationList = (list) => {
    return(
        <div className= "container">
            <div className="row">
             {list.items.map((item,idx)=> <NotificationCard item={item} key={idx}/>)} 
            </div>
        </div>
    )
}

export default NotificationList
import React, {Component} from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const NotificationBody =  styled.div`
    display: flex;
    flex-direction: row;
    width: 176px;
    min-height: 74px;
    margin: 0px 10px 10px 0px; 
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
    -webkit-border-top-left-radius: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
    -moz-border-radius-bottomleft: 4px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: 7px;
    margin-right: 6px;
    background-color: ${props => props.item.status === 'normal' ? '#11ca8e': props.item.status === 'low' ? '#ffa200' : '#ffffff'};
    display: ${props => props.item.status === 'critical' ? 'none' : 'block'};
`

const NotificationContent = styled.div `
    padding: ${props => props.item.status === 'critical' ? '10px 0px 10px 19px' : '10px 0px 10px 0px' };
`

const NotificationCard = (item) => {
    let obj = item.item
    return (
        <NotificationBody item={obj}>
            <LeftBar item={obj}/>
            <NotificationContent item={obj}>
                <CardTitle item={obj}>{obj.name}</CardTitle>
                <CardSubTitle item={obj}>{obj.condition}</CardSubTitle>
                <CardDate>{obj.date}, {obj.time}</CardDate>
            </NotificationContent>
        </NotificationBody>
    )    
}


const NotificationList = (list) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };
    return(
        <div className= "container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {list.items.map((item,idx)=> 
                <div>
                    <NotificationCard item={item} key={idx}/>
                </div>
                )}
            </div>
        </div>
    )
}

export default NotificationList
import React, {Component} from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views';

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
    console.log(item)
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


class NotificationList extends Component {
    constructor(props) {
        super()
        this.state = {
            index: 0, items: props.items, indexLimit:0
        }
        this.handleSlick = this.handleSlick.bind(this)
    }

    fetchSlides(items, buffer, offset) {
        let arr = items.splice(offset, offset+8)
        buffer.push(arr)
        if(offset+8 < items.length) {
            return this.fetchSlides(items, buffer, offset+8)
        } else {
            arr = items.splice(offset, items.length)
            buffer.push(arr)
            return buffer
        }
    }

    handleSlick(index) {
        this.setState({index})
    }

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          };
        let slides = this.fetchSlides(this.state.items, [],  0)
        return(
            <div className= "container">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <img src={process.env.PUBLIC_URL + "/assets/images/prev.png"} onClick={() => {this.handleSlick(this.state.index-1)}}/>
                    <SwipeableViews index = {this.state.index}  containerStyle={{overflow: 'hidden'}}>
                        {slides.map(slide =>
                            <div className="row"style={{display: 'flex', justifyContent:'center'}}>
                        {slide.map(item => <NotificationCard item={item} />)}
                            </div>
                        )}
                    </SwipeableViews>
                    <img src={process.env.PUBLIC_URL + "/assets/images/next.png"} onClick={() => {this.handleSlick(this.state.index+1)}}/>
                </div>
            </div>
        )
    }
}

export default NotificationList
import styled from 'styled-components';
import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
 

const IconRotate = styled.div`
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
`

const Card = styled.div`
    margin: 0px 6px 6px 0px;
    width: 230px;
    height: 150px;
    border-radius: 4px;
    background-color: #f3f3f4;
`
const CardContent = styled.div`
    padding: 20px 0px 20px 35px;
`

const Userinfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`
const UserPicture = styled.div`
    width: 60px;
    height: 60px;
    background-image: url('https://picsum.photos/200/300/?random');
    background-size: cover;
    margin-right: 10px;
    display: block;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
`
const UserName = styled.div`
  width: 100px;
  height: 19px;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #4d4d4d;
`

const NotificationPanel =  styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: center;
    justify-content: space-around;
`

const HomeIcon = (props) => {
    return (
    <IconRotate>
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"/>
            <path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"/>
            </svg>
        </SvgIcon>
    </IconRotate>
    )
}
const ResidentCard = (item) => {
    let obj = item.item    
    return (
     <Card>
        <CardContent>
            <Userinfo>
                <UserPicture />
                <UserName>{obj.name}</UserName>
            </Userinfo>
            <NotificationPanel>
                <div>
                    <HomeIcon color="primary"/>
                </div>
                <div>  
                    <HomeIcon color="secondary"/>
                </div>
                <div>  
                    <HomeIcon color="action"/>
                </div>
            </NotificationPanel>
        </CardContent>
     </Card>
    )
}

const ResidentList = (props) => {
    return (
        <div className= "container">
            <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {props.items.map((item,idx)=> 
                    <div>
                        <ResidentCard item={item} key={idx}/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ResidentList

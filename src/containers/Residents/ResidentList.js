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

const HeartIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="15" fill={props.status === 'normal' ? "#646464" : "#FF1D1D"}/>   
            <g fill="none" fill-rule="evenodd" stroke = {props.status === 'normal' ? "#646464" : ""} transform={props.status === 'normal' ? "translate(1 1)": ""}>
                <path fill={props.status === 'normal' ? "#646464" : "#FFF"} d="M12.862 20.66c-.3 0-.555-.131-.615-.423l-.833-3.987-.55.948a.645.645 0 0 1-.539.326H7.294a.628.628 0 0 1 0-1.253h2.675l1.19-2.016a.627.627 0 0 1 1.154.193l.505 2.435 1.148-6.378a.622.622 0 0 1 .617-.505h.003a.62.62 0 0 1 .617.51l1.227 7.16.393-1a.63.63 0 0 1 .583-.401h5.565a.628.628 0 0 1 0 1.255h-5.138l-1.062 2.682a.626.626 0 1 1-1.2-.125l-1.001-5.849-1.09 5.99c-.055.294-.31.437-.61.437h-.008z"/>
            </g>
        </svg>
    )
}
const NotificationIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" fill-rule="evenodd" stroke="#646464" transform="translate(1 1)">
                <circle cx="15" cy="15" r="15" fill="#ffffff"/>
                <g stroke-width="1.5">
                    <path d="M15.002 23.333c-1.043 0-1.888-.826-1.888-1.846h3.775c0 1.02-.845 1.846-1.887 1.846zM21.336 18.93c0 .696-.562.742-1.255.742H9.921c-.693 0-1.254-.046-1.254-.742v-.12c0-.501.292-.93.713-1.133l.398-3.454a5.244 5.244 0 0 1 4.149-5.137v-1.34c0-.596.481-1.08 1.075-1.08.593 0 1.074.484 1.074 1.08v1.34a5.243 5.243 0 0 1 4.149 5.137l.398 3.454c.42.204.713.632.713 1.133v.12z"/>
                </g>
            </g>
        </svg>
    )
}
const BatteryIcon =  (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                <circle cx="15" cy="15" r="15" fill="#FAFAFA" stroke="#646464"/>
                <g fill="#646464" transform="translate(6 11.333)">
                    <path stroke="#646464" stroke-width=".3" d="M-.15.997C-.15.362.363-.15 1-.15h14c.632 0 1.15.518 1.15 1.147v6.006c0 .635-.513 1.147-1.15 1.147H1c-.632 0-1.15-.518-1.15-1.147V.997zm.664.201v5.604c0 .352.294.648.65.648h13.673c.356 0 .65-.292.65-.648V1.198a.655.655 0 0 0-.65-.648H1.163a.652.652 0 0 0-.65.648z"/>
                    <rect width="12" height="5.333" x="1.333" y="1.333" rx=".5"/>
                    <path d="M16.667 2.667h.549c.303 0 .549.25.549.55v1.827c0 .304-.255.55-.55.55h-.548V2.668z"/>
                </g>
            </g>
        </svg>

    )
}

const ResidentCard = (item) => {
    let obj = item.item    
    console.log(obj)
    return (
     <Card>
        <CardContent>
            <Userinfo>
                <UserPicture />
                <UserName>{obj.name}</UserName>
            </Userinfo>
            <NotificationPanel>
                <div>  
                    <HeartIcon status={obj.heart_status}/>
                </div>
                    <BatteryIcon />
                <div>
                    <NotificationIcon color="primary"/>
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

import styled from 'styled-components';
import React, { Component } from 'react';
import { Link} from 'react-router-dom'


const BreadCrumbsContainer = styled.div`
    margin: 16px 0px 10px 10px;
    font-family: AvenirNext;
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    color: #1a1a1a;
`

const BreadCrumbs = (props) => {
    console.log(props.crumbs[0])
    return (
        <BreadCrumbsContainer>
            {props.crumbs.length > 1 ? (
                <div>
                  <Link to = {props.crumbs[0].route} style={{marginRight: '15px'}}>{props.crumbs[0].label}</Link>
                  >
                  <span style={{marginLeft: '15px'}}>{props.crumbs[1].label}</span>
                 </div>
            ) : (
                <span>{props.crumbs[0].label}</span>
            )}
        </BreadCrumbsContainer>
    )    
}
export default BreadCrumbs;

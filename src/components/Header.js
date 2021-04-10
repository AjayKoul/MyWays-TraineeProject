import React from 'react';
import styled from 'styled-components';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <>
            <Container>
                <LeftPart>
                    <img src="https://myways.in/static/media/favicon.0ee8b0e7.png" style={{height:'40px', width:'40px'}}/>
                    <p>My Ways</p>
                </LeftPart>
                <RightPart>
                    <span style={{margin:'0px'}}>
                        <MenuBookIcon/>
                        <p>Courses</p>
                    </span>
                    <span>
                        <BusinessCenterIcon/>
                        <p>Opportunities</p>
                    </span>
                    <span>
                        <MonetizationOnIcon/>
                        <p>Credits</p>
                    </span>
                    <span>
                        <NotificationsNoneIcon/>
                        <p>Notifications</p>
                    </span>
                    <span>
                        <AccountCircleIcon/>
                        <p>Ajay Koul</p>
                    </span>
                </RightPart>
            </Container>
        </>
    )
}

export default Header

const Container = styled.div`
    display: grid;
    grid-template-columns: 12vw auto;
    box-sizing: border-box;
`
const LeftPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
`
const RightPart = styled.div`
    background-color: #101910;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span{
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    span>p{
        margin: 0px;
    }
`
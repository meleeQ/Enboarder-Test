import React from 'react';
import { useDispatch } from 'react-redux';
import { BaseStyle, Button, LogoControl, PadGroup } from '../styles';
import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import { LandingPadGroup } from './LandingPadGroup';
import { getCapsules } from '../../actions/spaceActions';
import styled from 'styled-components';

const WrapperControl = styled.div`
    display:flex;
    flex-flow: row;
    background: #778899;
    height: 12em;
    padding: 1.875em;
    @media(max-width:768px){
        flex-flow: column;
        padding: 0;
        height: 100%;
    }
    @media(max-width:451px){
        width: 9.375em;
    }
    @media(max-width:415px){
        width: 8.625em;
    }
    @media(max-width:412px){
        width: 8.563em;
    }
    @media(max-width:376px){
        width: 7.813em;
    }
    @media(max-width:361px){
        width: 7.5em;
    }
    @media(max-width:321px){
        width: 6.66em;
    }  
`;

const CapsulesButton = styled(Button)`
    color: tomato;
    border-color: tomato;
    @media(max-width:768px){
       font-size:.4em;
       padding: 1em 2em;
    }
`;

export const ControlConsole = () =>{
    const dispatch =useDispatch();
    return (
        <WrapperControl>
            <BaseStyle>
                <CapsulesButton onClick={()=>getCapsules(dispatch)}>Capsules</CapsulesButton>
            </BaseStyle>
            <LogoControl>
                <Rocket />
            </LogoControl>  
            <PadGroup>
                <LandingPadGroup />  
            </PadGroup>                             
        </WrapperControl>   
    )
}
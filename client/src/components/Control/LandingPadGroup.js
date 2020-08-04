import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getLandingPadById } from '../../actions/spaceActions'
import { Button } from '../styles';

const WrapperPadGroup = styled.section`  
    background-color: #708090;
    text-align: center;
    @media(max-width:768px){
        display:flex;
        flex-flow:column;
        width:16em;
        height: 8em;
        justify-content: space-evenly;
    }
`;

const Input = styled.input.attrs({
    type: 'text',
    margin: props => props.size || '.5em',
    padding: props => props.size || '.5em'
})`
    color: palevioletred;
    border: 1px solid palevioletred;
    border-radius: 3px;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    @media(max-width:768px){
        font-size: .6em;
        width: 5.8em;
        margin: 0 auto;
    }
    @media(max-width:321px){
        font-size: .6em;
        width: 5em;
        margin: 0 auto;
    }
`;

const LandingPadButton = styled(Button)`
    color: tomato;
    border-color: tomato;
    @media(max-width:768px){  
        font-size:.4em;
        padding: 1em 1em;
        width: 10em;
        margin: 0 auto;         
    }
`;

export const  LandingPadGroup = () =>{
    const [landingPadId,setLandingPadId] =useState();
    const [buttonState,setButtonState] =useState(false);
    const dispatch =useDispatch();
    const validateInput=(value)=>{
        const pattern = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
        setButtonState(!pattern.test(value));
        return pattern.test(value);
    }    
    return (
        <WrapperPadGroup>               
            <Input  value={landingPadId || ''} onFocus={()=>setButtonState(false)} onBlur={(e)=>validateInput(e.target.value)} onChange={(e) => setLandingPadId(e.target.value)} /> 
            <LandingPadButton disabled={buttonState} onClick={()=>getLandingPadById(landingPadId,dispatch)}>Landing Pads</LandingPadButton>                   
        </WrapperPadGroup>    
    )
}
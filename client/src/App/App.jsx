import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import styled from 'styled-components';
import { ControlConsole } from '../components/Control/ControlConsole';
import  DisplyConsole  from '../components/Disply/DisplyConsole';

const Application = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-style: italic;
    color: black;
    margin:0 auto;
    paddding:0;
    width:50%;
    height:100%;
    position:abosulte;
    display:block;
    @media(max-width:768px){
        display:flex;
        margin:0;  
        width:100%;     
    }
`;

const App = () => (
    <>
        <Application >
        <DisplyConsole />
        <ControlConsole />    
        </Application>
        <GlobalStyle />
    </>
);

export default hot(App);
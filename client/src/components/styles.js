import styled from 'styled-components';

const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    disply: inline-block;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const LandingPadButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const BaseStyle = styled.div`
    background-color: #696969;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const DisplyLandingPad = styled.div`   
    background-color: #f4a460;
    flex: 1;
    width: 0;
`;

const DisplyCapsules = styled(DisplyLandingPad)`   
    background-color: #8674a1;
    overflow: auto;
`;

const LogoControl = styled(BaseStyle)`   
    background-color: #234477;
    
`;

const PadGroup = styled(BaseStyle)`  
    flex: 2;
`;

export {
    DisplyLandingPad,
    DisplyCapsules,
    PadGroup,
    Button,
    BaseStyle,
    LogoControl,
    LandingPadButton,
};
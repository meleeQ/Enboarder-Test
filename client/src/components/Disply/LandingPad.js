import styled from 'styled-components';
import React from 'react';

const WrapperUl = styled.ul`
    color: black;
    font-weight: bold;
    font-size:1em;
    padding:1em;
    @media(max-width:768px){
        font-size:.8em;
        padding:0;
    }
`;

const WrapperLi = styled.li`
    padding:1em;
    list-style:none;
`;

export const LandingPad = (props) =>{
    return (
        <WrapperUl>
            <WrapperLi><span>{`LandPad_id : ${props.item.id}`}</span></WrapperLi>
            <WrapperLi><span>{`LandPad_fullName :${props.item.full_name}`}</span></WrapperLi>
            <WrapperLi><span>{`LandPad_Status : ${props.item.stat}`}</span></WrapperLi>
            <WrapperLi><span>{`LandPad_locName :${props.item.location_name}`}</span></WrapperLi>
            <WrapperLi><span>{`LandPad_Region :${props.item.location_region}`}</span></WrapperLi>
            <WrapperLi><span>{`LandPad_Longitude :${props.item.location_longitude}`}</span></WrapperLi>
            <WrapperLi><span>{`LandPad_Latitude :${props.item.location_latitude}`}</span></WrapperLi>
        </WrapperUl>   
    )
}
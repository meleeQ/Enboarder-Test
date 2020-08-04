
import React from 'react';
import styled from 'styled-components';

const StyledCapsule = styled.div`   
    padding:1em;
`;

export const Capsule = (props) =>{
    return (
        <StyledCapsule>
            <span>{`Capusule_id : ${props.item.capsule_id}`}</span>
            <span>{`Capusule_serial : ${props.item.capsule_serial}`}</span>
            <span>{`Capusule_status : ${props.item.status}`}</span>
            <span>{`Capusule_original_launch : ${props.item.original_launch}`}</span>
        </StyledCapsule>
    
    )
}
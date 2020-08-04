import React from 'react';
import styled from 'styled-components';
import { DisplyCapsules, DisplyLandingPad } from '../styles';
import { connect } from 'react-redux';
import { Capsule } from './Capsule' ;
import { LandingPad } from './LandingPad';
import { CapsulesUTCSort } from '../../utils/CapsulesUTCSort';

const WrapperDisply = styled.div`
    padding: 1em;
    font-size:12px;
    display:flex;
    height:40em;
    background: papayawhip;
    @media(max-width:768px){  
      flex-grow:1;
      flex-wrap: nowrap; 
      width: 0;
      height:100%;
      padding: 0 1em;
    }  
`;

const DisplyConsole = ({landingPad, capsules}) =>{
    const sortedCapsules = CapsulesUTCSort(capsules);
    const Capsules = sortedCapsules && sortedCapsules.map(capsule => <Capsule key={capsule.capsule_serial} item={capsule} />)
    return (
      <WrapperDisply>
          <DisplyCapsules>
            { Capsules }             
          </DisplyCapsules>
          <DisplyLandingPad>
            { landingPad&&<LandingPad key={landingPad.id} item={landingPad} /> }
          </DisplyLandingPad>             
      </WrapperDisply>
    )
}

const mapStateToProps = (state) => {
    return {
      landingPad:state.spaceData.landingPad,
      capsules:state.spaceData.capsules,
      error:state.spaceData.error
    }
};

export default connect(mapStateToProps)(DisplyConsole)
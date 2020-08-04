
import {
	GET_LANDINGPAD,
    GET_CAPSULES,
    GET_ERRORS
} from '../constants'

export const getCapsules = async(dispatch) => {
    const resp = await fetch(`http://localhost:4000/capsules`);
    const json = await resp.json();
    dispatch({
        type: GET_CAPSULES,
        payload: json
    });
}

export const getLandingPadById = async(landingPadId, dispatch) => {
    const resp = await fetch(`http://localhost:4000/${landingPadId}`);
    const json = await resp.json();
    if(json.result){
        dispatch({
            type: GET_LANDINGPAD,
            payload: json.result[0]
        });
    }else{
        dispatch({
            type: GET_ERRORS,
            payload: 'No LandingPad By This Id'
        });
    }
}


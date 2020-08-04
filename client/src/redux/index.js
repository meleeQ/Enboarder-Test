import { createStore, combineReducers, compose } from 'redux';
import {
    GET_LANDINGPAD,
    GET_CAPSULES,
    GET_ERRORS
} from '../constants'

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';
const initialState = {
        capsules:[],
        landingPad: null,
        error:null
    }
    
const reducers = {
    spaceData: (state = initialState, action) => {
        const { type } = action;
        switch (type) {
            case GET_LANDINGPAD:
            return {
                ...state,
                landingPad: action.payload
            }
            case GET_CAPSULES:
            return {
                ...state,
                capsules: action.payload
            }
            case GET_ERRORS:
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
        }
    },
};

const slices = combineReducers({ ...reducers });

const  composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose;


const store = createStore(
    slices,
    composeEnhancers(),
);

export default store;

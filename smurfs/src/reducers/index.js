import { 
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  POST_SMURF_START, 
  POST_SMURF_SUCCESS, 
  POST_SMURF_FAILURE } from '../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        error: null
      };
    case POST_SMURF_START:
      return {
         ...state,
         addingSmurf: true,
         error: null
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        addingSmurf: false,
        error: null
      };
    default: 
      return state;
  }
}

export default rootReducer;



/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

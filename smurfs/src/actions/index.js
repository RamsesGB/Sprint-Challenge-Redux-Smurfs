import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res);
    dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
  })
  .catch(error => {
    dispatch({ type: FETCH_SMURF_FAILURE, payload: error })
  });
}

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF_START });
  return axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
  })
  .catch(error => {
    dispatch({ type: POST_SMURF_FAILURE, payload: error })
  });
}


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

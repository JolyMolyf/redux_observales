import { GET_UESRS_ATTEMP, GET_UESRS_SUCCESS, GET_UESRS_FAILED, SAVE_USERS  } from "../actions/usersActions";


const initialState = {
  users: [],
  isLoading: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case SAVE_USERS:
      return {...state, users: [...action.payload]}
    case GET_UESRS_ATTEMP: 
      return {...state, isLoading: true}
    case GET_UESRS_SUCCESS: 
      return {...state, isLoading: false}
    case GET_UESRS_FAILED: 
      return {...state, isLoading: false}
    default: 
      return state
  }
}

export default userReducer;
import { GET_COMMENTS_ATTEMP, GET_COMMENTS_FAILED, GET_COMMENTS_SUCCESS, SAVE_COMMENTS } from "../actions/commentsActions";

const intialState = {
  comments: [],
  isLoading: false,
}
const commentsReducer = (state = intialState, action) => {
  switch(action.type){
    case SAVE_COMMENTS:
      return {...state, comments: action.payload}
    case GET_COMMENTS_ATTEMP: 
      return {...state, isLoading: true}
    case GET_COMMENTS_SUCCESS: 
      return {...state, isLoading: false}
    case GET_COMMENTS_FAILED: 
      return {...state, isLoading: false}
    default:
      return state 

  }

}
export default commentsReducer;
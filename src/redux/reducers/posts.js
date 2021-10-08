import {GET_POSTS_ATTEMP, GET_POSTS_SUCCESS, GET_POSTS_FAILED, SAVE_POSTS } from "../actions/postsActions";


const initialState = {
  posts: [],
  isLoading: false,
}

const postsReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_POSTS_ATTEMP: 
      return {...state, isLoading: true}
    case GET_POSTS_SUCCESS:
      return {...state, isLoading: false}
    case GET_POSTS_FAILED: 
      return {...state, isLoading: false}
    case SAVE_POSTS:
      return {...state, posts: action.payload}
    default: return state
  }
}


export default postsReducer;
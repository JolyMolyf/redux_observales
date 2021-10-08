export const GET_POSTS_ATTEMP = 'GET_POSTS_ATTEMP'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'
export const SAVE_POSTS = 'SAVE_POSTS'



export const savePosts = (payload) => {
  return {
    type: SAVE_POSTS,
    payload
  }
}

export const getPostsAttemp = () => {
  return {
    type: GET_POSTS_ATTEMP
  }
}

export const getPostsSuccess = () => {
  return {
    type: GET_POSTS_SUCCESS
  }
}

export const getPostsFailed = () => {
  return {
    type: GET_POSTS_FAILED
  }
}


export const GET_COMMENTS_ATTEMP = '@comments/GET_COMMENTS_ATTEMP'
export const GET_COMMENTS_SUCCESS = '@comments/GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILED = '@comments/GET_COMMENTS_FAILED'
export const SAVE_COMMENTS = '@comments/SAVE_COMMENTS'



export const saveComments = (payload) => {
  return {
    type: SAVE_COMMENTS,
    payload
  }
}

export const getCommentsAttemp = () => {
  return {
    type: GET_COMMENTS_ATTEMP
  }
}

export const getCommentsSuccess = () => {
  return {
    type: GET_COMMENTS_SUCCESS
  }
}

export const getCommentsFailed = () => {
  return {
    type: GET_COMMENTS_FAILED
  }
}


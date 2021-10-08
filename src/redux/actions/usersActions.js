export const SAVE_USERS = '@users/SAVE_USERS'
export const GET_UESRS_ATTEMP = '@users/GET_UESRS_ATTEMP'
export const GET_UESRS_SUCCESS = '@users/GET_UESRS_SUCCESS'
export const GET_UESRS_FAILED = '@users/GET_UESRS_FAILED'



export const saveUsers = (payload) => {
  return {
    type: SAVE_USERS,
    payload
  }
}

export const getUsersAttemp = () => {
  console.log('here')
    return {
      type: GET_UESRS_ATTEMP
    }
}


export const getUsersSuccessed = () => {
  return {
    type: GET_UESRS_SUCCESS
  }
}

export const getUsersFailed = () => {
  return {
    type: GET_UESRS_FAILED
  }
}
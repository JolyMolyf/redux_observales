import axios from 'axios'
import { ofType } from 'redux-observable'
import { mapTo } from 'rxjs'
import { switchMap, from, map } from 'rxjs'
import { GET_EMPLOYEES_SUCCESS } from '../actions/employesActions'
import { getUsersFailed, getUsersSuccessed, GET_UESRS_ATTEMP, GET_UESRS_FAILED, GET_UESRS_SUCCESS, saveUsers, SAVE_USERS } from '../actions/usersActions'
import { useDispatch } from 'react-redux'


const URL_GET = 'https://jsonplaceholder.typicode.com/users'

export const saveUsersEpic = (action$, state$) => action$.pipe(
  ofType(SAVE_USERS),
  map(getUsersSuccessed)
)

export const getUsersEpic = (action$, state$) => action$.pipe(
  ofType(GET_UESRS_ATTEMP),
  switchMap((action) => from(axios.get(URL_GET).then((res)=>{
    console.log(res.data, 'from user epic')
    return res.data
  }))),
  map(saveUsers)

)
import axios from 'axios';
import {ofType} from 'redux-observable';
import {from} from 'rxjs';
import {ignoreElements, switchMap, map} from 'rxjs/operators';
import { getCommentsSuccess, GET_COMMENTS_ATTEMP, saveComments, SAVE_COMMENTS } from '../actions/commentsActions';


const URL_GET = 'https://jsonplaceholder.typicode.com/comments'

export const saveCommentsEpic = (action$, state) => action$.pipe(
  ofType(SAVE_COMMENTS),
  map(getCommentsSuccess)
)

export const getCommentsEpic = (action$, state) => action$.pipe(
  ofType(GET_COMMENTS_ATTEMP),
  switchMap(action => from(axios.get(URL_GET).then((res)=> {
    return res.data
  }))),
  map(saveComments)
)


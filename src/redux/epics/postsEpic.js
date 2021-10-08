import axios from 'axios';
import {ofType} from 'redux-observable';
import {from} from 'rxjs';
import {ignoreElements, switchMap, map} from 'rxjs/operators';
import { getPostsSuccess, GET_POSTS_ATTEMP, savePosts, SAVE_POSTS } from '../actions/postsActions';


const URL_GET = 'https://jsonplaceholder.typicode.com/posts'

export const savePostsEpic = (action$, state) => action$.pipe(
  ofType(SAVE_POSTS),
  map(getPostsSuccess)
)

export const getPostsEpic = (action$, state) => action$.pipe(
  ofType(GET_POSTS_ATTEMP),
  switchMap(action => from(axios.get(URL_GET).then((res)=> {
    console.log(res.data);
    return res.data
  }))),
  map(savePosts)
)


import {ofType} from 'redux-observable';
import {from} from 'rxjs';
import {ignoreElements, switchMap, map} from 'rxjs/operators';
import { GET_EMPLOYEES_ATTEMP, saveEmployes, SAVE_EMPLOYEES, GET_EMPLOYEES_SUCCESS } from '../actions/employesActions';
import { getEmployeesSuccess } from '../actions/employesActions';
import axios from 'axios';



export const attempGetEmployeesEpic = (action$, state$) => action$.pipe(
  ofType(GET_EMPLOYEES_ATTEMP),
  switchMap(action => from(axios.get('https://dummy.restapiexample.com/api/v1/employees').then((res)=>{
    console.log(res.data);
    return res.data
  }))),
  map((val) =>{
    console.log(val)
    return val.data
  }),
  map(saveEmployes)
)

export const saveEmployees = (action$, state$) => action$.pipe(
  ofType(SAVE_EMPLOYEES),
  map(getEmployeesSuccess)
)

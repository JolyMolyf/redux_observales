import {ofType} from 'redux-observable';
import {from} from 'rxjs';
import {ignoreElements, switchMap, map} from 'rxjs/operators';
import { GET_EMPLOYEES_ATTEMP, SAVE_EMPLOYEES, GET_EMPLOYEES_SUCCESS, DELETE_EMPLOYEE_ATTEMP, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILED, UPDATE_EMPLOYEE_ATTEMP, updateEmployeeSuccess, deleteEmployesFailed, getEmployeesFailed, updateEmployeeFailed } from '../actions/employesActions';
import { getEmployeesSuccess, saveEmployes, deleteEmployesAttemp, deleteEmployesSuccess } from '../actions/employesActions';
import axios from 'axios';

const URL_DELETE = 'http://dummy.restapiexample.com/api/v1/delete/'
const URL_UPDATE = 'http://dummy.restapiexample.com/api/v1/update/'

export const saveEmployees = (action$, state$) => action$.pipe(
  ofType(SAVE_EMPLOYEES),
  map(getEmployeesSuccess)
)

export const attempGetEmployeesEpic = (action$, state$) => action$.pipe(
  ofType(GET_EMPLOYEES_ATTEMP),
  switchMap(action => from(axios.get('https://dummy.restapiexample.com/api/v1/employees').then((res)=>{
    return res.data
  }).catch((err)=>{
    console.log(err)
    map(getEmployeesFailed)
  }))),
  map((val) =>{
    if(val){
      return val.data
    }else{
      return []
    }
    
  }),
  map(saveEmployes)
)



// dummy dat api doesnt work corretly 
export const attempDeleteEmployeesEpic = (action$, state$) => action$.pipe(
  ofType(DELETE_EMPLOYEE_ATTEMP),
  
  switchMap(action => from(axios.delete(`${URL_DELETE + action.payload}`).then((res)=> {
    console.log(action.payload)
  }).catch((err)=>{
    map(deleteEmployesFailed)
  }))),
  map(deleteEmployesSuccess),

)


// dummy dat api doesnt work corretly 
export const attempUpdateEmployeeEpic = (action$, state$) => action$.pipe(
  ofType(UPDATE_EMPLOYEE_ATTEMP),
  switchMap(action => from(axios.put(`${URL_UPDATE + action.payload.id}`, {body: action.payload}).then((res)=> {
    console.log(res);
  }).catch((err)=>{
    console.log(err);
    map(updateEmployeeFailed);
  }))),
  map(updateEmployeeSuccess)

)

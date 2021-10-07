import { GET_EMPLOYEES_ATTEMP, SAVE_EMPLOYEES, GET_EMPLOYEES_SUCCESS, DELETE_EMPLOYEE_ATTEMP, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILED, UPDATE_EMPLOYEE_ATTEMP, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILED } from "../actions/employesActions";
const initialState = {
  employes: [],
  isLoading: false,
}


const employesReducer = (state = initialState, action) => {
  switch(action.type){
    case SAVE_EMPLOYEES: 
      return {...state, employes: action.payload}
    case GET_EMPLOYEES_ATTEMP: 
      return {...state, isLoading: true}
    case GET_EMPLOYEES_SUCCESS: 
      return {...state, isLoading: false}
    case UPDATE_EMPLOYEE_ATTEMP: 
      console.log(action.payload)
      return {...state, isLoading: true}
    case UPDATE_EMPLOYEE_SUCCESS: 
      return {...state, isLoading: false}
      case UPDATE_EMPLOYEE_FAILED: 
      return {...state, isLoading: false}
    case DELETE_EMPLOYEE_ATTEMP: 
      return {...state, isLoading: true, employes: state.employes.filter((el)=> {
        if(el.id == action.payload){return false;}
        return true;
      })}
    case DELETE_EMPLOYEE_SUCCESS: 
      return {...state, isLoading: false}
    case DELETE_EMPLOYEE_FAILED: 
      return {...state, isLoading: false}
    default: 
      return state;
  }
}



export default employesReducer
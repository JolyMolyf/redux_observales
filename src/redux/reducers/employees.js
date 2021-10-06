import { GET_EMPLOYEES_ATTEMP } from "../actions/employesActions";
import { GET_EMPLOYEES_SUCCESS } from "../actions/employesActions";
import { SAVE_EMPLOYEES } from "../actions/employesActions";
const initialState = {
  employes: [],
  isLoading: false,
}


const employesReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_EMPLOYEES_ATTEMP: 
      return {...state, isLoading: true}
    case GET_EMPLOYEES_SUCCESS: 
      return {...state, isLoading: false}
    case SAVE_EMPLOYEES: 
      return {...state, employes: action.payload}
    default: 
      console.log('reducer default', action.type)
      return state;
  }
}



export default employesReducer
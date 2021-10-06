export const GET_EMPLOYEES_ATTEMP = '@employes/GET_EMPLOYEES_ATTEMP'
export const GET_EMPLOYEES_SUCCESS = '@employes/GET_EMPLOYES_SUCCESS'
export const GET_EMPLOYEES_FAILED = '@employes/GET_EMPLOYEES_FAILED'
export const SAVE_EMPLOYEES = '@employes/SAVE_EMPLOYEES'



export const attempGetEmployees = () => {
  return {
    type: GET_EMPLOYEES_ATTEMP
  }
}

export const saveEmployes = (payload) => {
  return {
    type: SAVE_EMPLOYEES,
    payload
  }
}

export const getEmployeesSuccess = (payload) => {
  return {
    type: GET_EMPLOYEES_SUCCESS,
    payload
  }
}

export const getEmployeesFailed = (payload)  => {
  return {
    type: GET_EMPLOYEES_FAILED, 
    payload
  }
}
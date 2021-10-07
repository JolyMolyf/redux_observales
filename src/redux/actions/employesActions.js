export const SAVE_EMPLOYEES = '@employes/SAVE_EMPLOYEES'
export const GET_EMPLOYEES_ATTEMP = '@employes/GET_EMPLOYEES_ATTEMP'
export const GET_EMPLOYEES_SUCCESS = '@employes/GET_EMPLOYES_SUCCESS'
export const GET_EMPLOYEES_FAILED = '@employes/GET_EMPLOYEES_FAILED'
export const UPDATE_EMPLOYEE_ATTEMP = '@employee/UPDATE_EMPLOYEE_ATTEMP'
export const UPDATE_EMPLOYEE_SUCCESS = '@employee/UPDATE_EMPLOYEE_SUCCESS'
export const UPDATE_EMPLOYEE_FAILED = '@employee/UPDATE_EMPLOYEE_FAILED'
export const DELETE_EMPLOYEE_ATTEMP = '@employee/DELETE_EMPLOYEE_ATTEMP'
export const DELETE_EMPLOYEE_SUCCESS = '@employee/DELETE_EMPLOYEE_SUCCESS'
export const DELETE_EMPLOYEE_FAILED  = '@employee/DELETE_EMPLOYEE_FAILED'



export const saveEmployes = (payload) => {
  return {
    type: SAVE_EMPLOYEES,
    payload
  }
}

export const attempGetEmployees = () => {
  return {
    type: GET_EMPLOYEES_ATTEMP
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

export const deleteEmployesAttemp = (payload) => {
  return {
    type: DELETE_EMPLOYEE_ATTEMP, 
    payload
  }
}
export const deleteEmployesSuccess = (payload) => {
  return {
    type: DELETE_EMPLOYEE_SUCCESS, 
    payload
  }
}

export const deleteEmployesFailed = (payload) => {
  return {
    type: DELETE_EMPLOYEE_FAILED, 
    payload
  }
}

export const updateEmployeeAttemp = (payload) => {
  return {
    type: UPDATE_EMPLOYEE_ATTEMP,
    payload
  }
}

export const updateEmployeeSuccess = (payload) => {
  return {
    type: UPDATE_EMPLOYEE_SUCCESS
  }
}

export const updateEmployeeFailed = (payload) => {
  return {
    type: UPDATE_EMPLOYEE_FAILED
  }
}
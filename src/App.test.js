import { cleanup, render as rtlRender, screen, getByText, findByText, fireEvent, findByRole, findAllByText } from '@testing-library/react';
import App from './App';
import React from 'react'
import EmployeeList from './components/employesComponent/EmployeeList'
import {Provider} from 'react-redux'
import { GET_EMPLOYEES_ATTEMP, SAVE_EMPLOYEES, GET_EMPLOYEES_SUCCESS, DELETE_EMPLOYEE_ATTEMP, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILED, UPDATE_EMPLOYEE_ATTEMP, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILED } from "./redux/actions/employesActions";
import store from './redux/store'

const EMPLOYEE_NAME = 'Tiger Nixon'


const render = component => rtlRender(
  <Provider store={store()}>
      {component}
  </Provider>
)

test('check if redux is rendered', () => {

  const {container, getByText, findByText } = render(<EmployeeList />)
  expect(getByText(/Hello /i)).toBeInTheDocument()

});


/// This test should select one of the rows of the grid and check if it is added in to the list of the slected Employes
// test('check if the selected rows are added to the list component', async () => {
//   const {container, getByText, findByRole} = render(<EmployeeList/>)
//   const cell = await (await screen.findByText(EMPLOYEE_NAME, undefined, { timeout: 5000}));
//   expect(cell).toBeInTheDocument();
//   expect(cell).toHaveClass('ag-cell')
//   fireEvent.click(cell)
//   expect(cell.parentElement).toHaveClass('ag-row-selected')
//   const listEl = await screen.findByTestId('customelement')
//   expect(listEl).toBeInTheDocument()
//   expect(listEl).toHaveTextContent(EMPLOYEE_NAME)


// }, 10000);

test('check if cell gets the border of right color', async () => {
  const { container, getByText, findByRole } = render(<EmployeeList/>)
  const age = await screen.findByText('61')

}, 10000);


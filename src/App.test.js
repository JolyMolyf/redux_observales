import { cleanup, render, fireEvent, } from '@testing-library/react';
import App from './App';
import React from 'react'
import { createStore } from "redux";
import EmployeeList from './components/employesComponent/EmployeeList'
import {Provider} from 'react-redux'
import store from './redux/store'
import reducer from './redux/reducers'




const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};


describe('Check redux render', ()=> {
 
  afterEach(cleanup)

  const attempGetEmployeesEpic = jest.fn()
  attempGetEmployeesEpic.mockReturnValueOnce([
    {
    id: 1,
    employee_name: 'Tiger Nixon',
    employee_salary: 320800,
    employee_age: 61,
    profile_image: ''
    }, 
    {
      id: 2,
      employee_name: 'Garrett Winters',
      employee_salary: 170750,
      employee_age: 63,
      profile_image: ''
    }
])

  it('Check if the redux component is rendered properly', ()=>{
    const { getByText } = renderWithRedux(<EmployeeList/>)
    expect(getByText(/Hello from grid Component/i)).toBeInTheDocument();
  })


  it('Check if the age cell has right color border', () => {
    const { queryByText, getByText, getAllByText, getByRole, getAllByRole } = renderWithRedux(<EmployeeList/>,  {
      initialState: { 
        emp: {
          employes: [  {
            id: 1,
            employee_name: 'Tiger Nixon',
            employee_salary: 320800,
            employee_age: 61,
            profile_image: ''
          },
          {
            id: 2,
            employee_name: 'Garrett Winters',
            employee_salary: 170750,
            employee_age: 63,
            profile_image: ''
          },]
        }
      },
    })
  
    const cellOld = getByText(61)
    const cell2Elder = getByText(63)
    const cell3Young = queryByText(50)
    expect(cellOld).toBeInTheDocument()
    expect(cell2Elder).toBeInTheDocument()
    expect(cell3Young).not.toBeInTheDocument()
    expect(cellOld).toHaveClass('old')
    expect(cellOld).not.toHaveClass('young')
  })

  it('check if the selected rows are added to the list component', async () => {
    const { queryByText, getAllByText, getByText, findByTestId, findByRole, getByTestId} = renderWithRedux(<EmployeeList/>,  {
      initialState: { 
        emp: {
          employes: [  {
            id: 1,
            employee_name: 'Tiger Nixon',
            employee_salary: 320800,
            employee_age: 61,
            profile_image: ''
          },
          {
            id: 2,
            employee_name: 'Garrett Winters',
            employee_salary: 170750,
            employee_age: 63,
            profile_image: ''
          },]
        }
      },
    })
      const cell = getByText('Tiger Nixon')
      expect(cell).toBeInTheDocument();
      expect(cell).toHaveClass('ag-cell');
      fireEvent.click(cell);
      expect(cell.parentElement).toHaveClass('ag-row-selected');
      const listEl = await findByTestId('list');
      expect(listEl).toBeInTheDocument();
      expect(listEl).toHaveTextContent('Tiger Nixon')

  }, 10000)
})



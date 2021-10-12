import React, { useEffect } from 'react'


const List = ({employes}) => {
  
  console.log(employes, 'selectedEmployes');

  return(
    <div>
      <h1>Selected Employes</h1>
      <p> 61 </p>
      <ul>
      {employes.map((emp) => {
          return(
            <li data-testid={`customelement`} key={emp.id}> {emp.employee_name}</li>
          )
      })}
      </ul>
    </div>
    )
}

export default List;
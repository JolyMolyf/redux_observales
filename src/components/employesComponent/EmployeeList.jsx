import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { attempGetEmployees } from '../../redux/actions/employesActions'
import AgGrid from '../agGgrid/agGrid';
import List from '../listComponent/list';
import RxJsTest from '../rxJsTest/RxJsTest';


const EmployeeList = (props) => {

  const dispatch = useDispatch();
  const [ selectedEmployees, setSelectedEmployees ] = useState([])


  useEffect(()=> {
    dispatch(attempGetEmployees())
  }, [])

  return (<div>
    <h3>Emplpoyees Registered</h3>
  </div>)
}

export default EmployeeList;
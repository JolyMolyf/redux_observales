import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

import {  BrowserRouter as Router, Route } from 'react-router-dom';
import UsersList from './components/usersCpomponent/UsersList';
import EmployeeList from './components/employesComponent/EmployeeList';

function App() {


  return (
    <div className="App">
      <Router>
        <Route exact path='/employes' component={EmployeeList}/>
        <Route exact path='/users' component={UsersList}/>
      </Router>
     
    </div>
  );
}

export default App;

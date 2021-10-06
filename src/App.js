import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
// import { Observable, Subject, fromEvent, interval  } from 'rxjs'
// import { scan, take } from 'rxjs/operators';
import { useDispatch } from 'react-redux';
import { attempGetEmployees } from './redux/actions/employesActions'
import AgGrid from './components/agGgrid/agGrid';



function App() {

  const dispatch = useDispatch();
  // const stream$ = interval(1000).pipe(
  //   take(5)
  // ).subscribe({
  //   next: (val)=>{
  //     console.log(val)
  //   },
  //   complete: ()=>{
  //     console.log('completed')
  //   }
  // })


  // const streamEvent$ = fromEvent(document, 'click').pipe(scan(count => count + 1, 0))
  // .subscribe(count => console.log(`Clicked ${count} times`));


  useEffect(()=>{
      dispatch(attempGetEmployees())
  }, [])


  return (
    <div className="App">

      <h1>Employees</h1>
      <AgGrid/>
    </div>
  );
}

export default App;

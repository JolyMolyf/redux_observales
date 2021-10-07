import React, {useEffect, useState} from 'react'
// import { Observable, Subject, fromEvent, interval  } from 'rxjs'
// import { scan, take } from 'rxjs/operators';

const RxJsTest = () => {



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

  return(
    <div>
      <h2>RXjs Test Functionality</h2>


    </div>
  )
}

export default RxJsTest
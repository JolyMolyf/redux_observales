import React, {useEffect} from 'react';
import testWorker from '../../workers/testWorker'


const WebWorkerTriggers = () => {

  useEffect(()=>{
  
  }, [])


  const webWorkerCick = () => {
    const myWorker = new Worker(testWorker)
    myWorker.onmessage = (m) => {
      console.log("msg from worker: ", m.data);
    };
    myWorker.postMessage('im from main');
    myWorker.postMessage('second from main');
  }

  const testUI = () => {
    console.log("TEST UI")
  }


  return(
    <div>
      <button onClick={webWorkerCick}>Click Web Worker</button>
      <button onClick={testUI}>Click to test UI</button>
    </div>
  )
}

export default WebWorkerTriggers
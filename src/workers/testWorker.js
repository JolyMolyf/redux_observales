const workercode = () => {
  const bigTask = ()=>{
    const sum = new Array(2131232).fill(0).map((el, ind)=> {
      return el + ind
    }).reduce((sum, el)=> sum + el, 0)
    console.log(sum)
  }

  onmessage = function(e) { // without self, onmessage is not defined
    const workerResult = 'Received from main: ' + (e.data);
    bigTask()
    postMessage(workerResult ); // here it's working without self
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
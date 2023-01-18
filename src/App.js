import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const resultInput = document.getElementById('result');
  // resultInput.select();

  const [prev, setPrev] = useState("");
  const [result, setResult] = useState(0);

  const onAdd = () => {
    setPrev(Number(result) + Number(prev));
    setResult(0);
    if (resultInput.value !== ""){
      resultInput.value = "";
      resultInput.focus();
    }
  }

  const onMinus = () => {
    if(prev == ""){
      setPrev(Number(result));
    }
    else{
      setPrev(Number(prev) - Number(result));
    }
    setResult(0);
    if (resultInput.value !== ""){
      resultInput.value = "";
    }
    resultInput.focus();
  }

  const onMultiply = () => {
    if(prev == ""){
      setPrev(Number(result));
    }
    else{
      setPrev(Number(prev) * Number(result));
    }
    setResult(0);
    if (resultInput.value !== ""){
      resultInput.value = "";
    }
    resultInput.focus();
  }

  const onDivide = () => {
    if(prev == ""){
      setPrev(Number(result));
    }
    else{
      setPrev(Number(prev) / Number(result));
    }
    setResult(0);
    if (resultInput.value !== ""){
      resultInput.value = "";
    }
    resultInput.focus();
  }

  const onMod = () => {
    if(prev == ""){
      setPrev(Number(result));
    }
    else{
      setPrev((Number(result) / 100) *  Number(prev));
    }
    setResult(0);
    if (resultInput.value !== ""){
      resultInput.value = "";
    }
    resultInput.focus();
  }

  

  const onEnter = () => {

  }

  return (
    <span className="outer">
      <div className='App'>
        <div className='row'>
          <input type="text" id="prev" 
            name='prev' 
            className="previousInputStyle"
            value={prev=="" ? "" : prev}
          />
          <input type="text" 
            id="result" 
            name='result' className="inputStyle" 
            placeholder='0'
            value={result=="" ? "" : result}
            // onChange={(event) => setResult((event.target.value !== "" ) ? (event.target.value) : "" )}
            onChange={(event) => setResult(event.target.value)}
            autoFocus
            autoComplete='off'
          />
        </div>
        <div className='row gx-2'>
          <button className='col btn btn-secondary'>AC</button>
          <button className='col btn btn-secondary' onClick={onDivide}>/</button>
          <button className='col btn btn-secondary' onClick={onAdd}>+</button>
          <button className='col btn btn-secondary' onClick={onMod}>%</button>
        </div>
        <div className='row gx-2'>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            7
          </button>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            8
          </button>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            9
          </button>
          <button className='col btn btn-secondary' onClick={onMinus}>-</button>
        </div>
        <div className='row gx-2'>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            4
          </button>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            5
          </button>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            6
          </button>
          <button className='col btn btn-secondary' onClick={onMultiply}>x</button>
        </div>
        <div className='row gx-2'>
        <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            1
          </button>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            2
          </button>
          <button 
            className='col btn btn-secondary' 
            onClick={(event) => {
              setResult(result == 0 ? event.target.textContent : result+event.target.textContent)}
            }
          >
            3
          </button>
          <button className='col btn btn-secondary' onClick={onEnter}>=</button>
        </div>
      </div>
    </span>
  );
}

export default App;

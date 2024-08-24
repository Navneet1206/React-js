import {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <div className='value'>{value}</div>
      <button className='btn' onClick={()=>{setValue(value+1)}}>Increase</button>
      <button className='btn' onClick={()=>{setValue(value-1)}}>decrease</button>
      <button className='btn' onClick={()=>{setValue(0)}}>Reset</button>
    </div>
  );
}

export default App;

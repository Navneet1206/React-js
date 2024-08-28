import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText='My Name is Navneet Vishwakrma '/>
      <div className='value'>{value}</div>
      <button className='btn' onClick={()=>{setValue(value+1)}}>Increase</button>
      <button className='btn' onClick={()=>{setValue(value-1)}}>decrease</button>
      <button className='btn' onClick={()=>{setValue(0)}}>Reset</button>
      <Footer />
    </div>
  );
}

export default App;

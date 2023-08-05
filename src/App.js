import './App.css';

import Navbar from './components/Navbar';
import Shop from './components/Shop';


function App() {
  return (
   <>
    <Navbar></Navbar>
    <div className='container'>
      <Shop></Shop>
    </div>
    </>
  );
}

export default App;

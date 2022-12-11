import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Active from './components/Active/Active';
import All from './components/All/All';
import Completed from './components/Completed/Completed';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  const navigate = useNavigate()

  function handleClickAll(){
    navigate("/")
  }

  function handleClickActive(){
    navigate("/active")
  }

  function handleClickCompleted(){
    navigate("/completed")
  }

  return (
    <ThemeContextProvider>
      <div className='container'>
        <h1>#todo</h1>
        <div className='menu'>
          <div className='menuItem' onClick={handleClickAll}>All</div>
          <div className='menuItem' onClick={handleClickActive}>Active</div>
          <div className='menuItem' onClick={handleClickCompleted}>Completed</div>
        </div>
        <Routes>
          <Route path='/' element={<All />}/>
          <Route path='/active' element={<Active />}/>
          <Route path='/completed' element={<Completed />}/>
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

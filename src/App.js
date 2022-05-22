import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/purchase/:toolId' element={<Purchase></Purchase>}></Route>
     </Routes>
    </div>
  );
}

export default App;

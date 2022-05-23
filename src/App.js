import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyOrder from './Components/MyOrder/MyOrder';
import Navbar from './Components/Navbar/Navbar';
import Purchase from './Components/Purchase/Purchase';
import Reviews from './Components/Reviews/Reviews';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:productId' element={<Purchase></Purchase>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='reviews' element={<Reviews></Reviews>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

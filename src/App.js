import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Pages/LoginPage/Login';
import Home from './Pages/HomePage/Home.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout.jsx';
import SingleProductView from './Pages/ProductView/ProductView.jsx';
import Error from './Pages/ErrorPage/Error.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import { useSelector } from 'react-redux'; // Import useSelector
import OrderConfirmed from './Pages/OrderConfirm/OrderConfirmed.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';

function App() {
  const { isLoggedIn } = useSelector((store) => store.login); // Check login state

  return (
    <BrowserRouter>
      <Routes>
        {/* If not logged in, redirect to login page */}
        <Route path="/" element={isLoggedIn ? <RootLayout /> : <Navigate to="/login" />} >
          <Route index element={<Home />} />
         
          <Route path="/ProductDetails/:productId" element={<SingleProductView />} />
          <Route path='cart' element={<Cart />} />
          <Route path='/orderconfirmed' element={<OrderConfirmed/>}></Route>
        </Route>

       
        <Route path='/login' element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
{/* 
        <Route path='/login' element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        
        {/* Add the signup route here 
        <Route path='/signup' element={<SignUp />} /> */}

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
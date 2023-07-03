import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/shop-now' exact element={<Home/>}/>
        <Route path='/shop-now/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
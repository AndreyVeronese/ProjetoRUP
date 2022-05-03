import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login';
import Homepage from '../pages/Homepage';
import { Register } from '../pages/Register';



export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='*' element={<Navigate to={'/home'} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        </Routes>
        </BrowserRouter>
    );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import AuthContextProvider from './store/auth-context/AuthContextProvider';
import UserProfile from './components/pages/UserProfile';
import ProtectedRoute from './route/ProtectedRoute'
import UpdateProfile from './components/pages/UpdateProfile';
import ForgotPassword from './ForgotPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
    
      <Route path='' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='profile' element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
      <Route path='update-profile' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute>}/>
      <Route path='forgot-password' element={<ForgotPassword/>}/>
     
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
    <RouterProvider router={router}/>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

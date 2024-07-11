import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Login } from './pages/login';
import { Dash } from './pages/dash';
import { Register } from './pages/register';
import { WebSocketProvider } from './components/services/userContext';
import './assets/styles/globales.css'


import { Inicio } from './pages/Inicio';


function App() {
  return (
  <BrowserRouter>
      <WebSocketProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registro' element={<Register />} />
          

          <Route element={<ProtectedRoutes/>}>
              <Route path='/inicio' element={<Inicio/>} />
          </Route>


          <Route path='/dash' element={
            <ProtectedRoutes 
              redirectTo='/inicio'>
                <Dash />
            </ProtectedRoutes>
          } />

          <Route path='+' element={<Navigate to='/'/>}/>
        </Routes>
      </WebSocketProvider>
  </BrowserRouter>
  );
}

export default App;
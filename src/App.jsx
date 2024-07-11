import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import React, {Suspense, lazy} from 'react';

import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { RecuperarContraseña } from './pages/recuperarContraseña'
import { CambiarContraseña } from './pages/cambiarContraseña'
import { BusquedaContraseña } from './pages/busquedaContraseña'


import { Inicio } from './pages/Inicio'
import { Dash } from './pages/dash';



import { WebSocketProvider } from './components/services/userContext';
import './assets/styles/globales.css'



function App() {
  return (
  <BrowserRouter>
      <WebSocketProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/recuperacion-contraseña' element={<RecuperarContraseña/>}/>
          <Route path='/cambiar-contraseña' element={<CambiarContraseña/>}/>
          <Route path='/busqueda-contraseña' element={<BusquedaContraseña/>}/>
          

          <Route element={<ProtectedRoutes/>}>
            <Route path='/inicio' element={<Inicio/>}/>
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

export default App

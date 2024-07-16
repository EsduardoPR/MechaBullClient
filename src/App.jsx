import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import { useState } from 'react'

//esqueleto
import React, {Suspense, lazy} from 'react';

import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { RecuperarContraseña } from './pages/recuperarContraseña'
import { CambiarContraseña } from './pages/nuevaContraseña'
import { BusquedaContraseña } from './pages/busquedaContraseña'


import { Inicio } from './pages/Inicio'
import { Dash } from './pages/dash';
import { Settings } from './pages/settings';




import { WebSocketProvider } from './components/services/userContext';
import './assets/styles/globales.css'
import { ErrorFromRecoveryPasswd } from './pages/errorFromRecoveryPasswd';
import { NotFound } from './pages/notFound';


function App() {
  return (
  <BrowserRouter>
      <WebSocketProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reg' element={<Register />} />
          <Route path='/pros-rec-contra' element={<RecuperarContraseña/>}/>
          <Route path='/error-rec-pass' element={<ErrorFromRecoveryPasswd/>}/>
          <Route path='/new-contra' element={<CambiarContraseña/>}/>
          <Route path='/busqueda-contraseña' element={<BusquedaContraseña/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/config' element={<Settings/>}/>
          </Route>
          
          <Route path='/dash' element={
            <ProtectedRoutes 
              redirectTo='/inicio'>
                <Dash />
            </ProtectedRoutes>
          } />
          <Route path='/*' element={<NotFound/>}/>
          <Route path='+' element={<Navigate to='/'/>}/>
        </Routes>
      </WebSocketProvider>
  </BrowserRouter>
  );
}

export default App

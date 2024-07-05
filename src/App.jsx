import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { Login } from './pages/login'
import { Inicio } from './pages/Inicio'
import { Dash } from './pages/dash'
import { useState } from 'react'
import { Register } from './pages/register'
function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      user: "juan",
      permission: ['user']
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <BrowserRouter>
      <Navigation/>
        {
          user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )
        }

      <Routes>
        <Route path='/'element={<Login/>}/>
        // ! existe 
        // !! no existe - son abreviaciones
        <Route path='/registro' element={<Register/>}/>
        <Route element={<ProtectedRoutes isAllowed={!!user}/>}>
          <Route path='/inicio' element={<Inicio/>}/>
        </Route>
        <Route path='/dash' element={
          <ProtectedRoutes 
            isAllowed={!!user && user.permission.includes('admin')} 
            redirectTo='/inicio'>
              <Dash/>
          </ProtectedRoutes>}/>

        
      </Routes>
    </BrowserRouter>
  )
}

function Navigation(){
  return <nav>
    <ul>
      <li>
        <Link to='/'>landing</Link>
      </li>
      <li>
        <Link to='/registro'>landing</Link>
      </li>

      <li>
        <Link to='/inicio'>inicio</Link>
      </li>
      <li>
        <Link to='/dash'>dashboard</Link>
      </li>
    </ul>
  </nav>
}

export default App

import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CreateAccount from './pages/login/CreateAccount'
import MainContext from './context/MainContext'
import Cadastro from './pages/cadastro/Cadastro'
function Routers() {
  return (
    <BrowserRouter>
    <MainContext>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/createaccount' element={<CreateAccount />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
        </Routes>
    </MainContext>
    </BrowserRouter>
  )
}

export default Routers
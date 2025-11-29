import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Dashboard from './componentes/Dashboard'
import Perfil from './componentes/Perfil'
import Relatorios from './componentes/Relatorios'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const {issidebaropen, setissidebaropen} = useState(false);
  const closesidebar = () => setissidebaropen(false);
  return (
    <div className='contentor'>
      <BrowserRouter>
        <Header /*ontogglemenu=() => setsidebaropen(v => !v)*//>
        <div className='fundo'>
          {/* <sidebar isOpen={issidebaropen}
          closesidebar=(closesidebar) /> */}
          
            <main className='page-body'>
              <Routes> 
                <Route path='/' element={<Dashboard />} />
                <Route path='/relatorios' element={<Relatorios />} />
                <Route path='/perfil' element={<Perfil />} />
              </Routes>
            </main>

        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

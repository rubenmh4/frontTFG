
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import { Index } from './Pages/Index/Index'
import { Instalaciones } from './Pages/Instalaciones/Instalaciones'
import { Contacto } from './Pages/Contacto/Contacto'

function App() {
  
  return (

<>
 <Header />
  <Routes>
    <Route path='/' element={<Index/>}></Route>
    <Route path='/instalaciones' element={<Instalaciones/>}></Route>
    <Route path='/chat' ></Route>
    <Route path='/contacto' element={<Contacto/>}></Route>
    <Route path='/reservarPartido' ></Route>
    <Route path='/usurio/:id' ></Route>
  </Routes>
  <Footer/>
</>
  )
}

export default App

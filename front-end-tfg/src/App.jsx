import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Index } from './Pages/Index/Index';
import { Instalaciones } from './Pages/Instalaciones/Instalaciones';
import { Contacto } from './Pages/Contacto/Contacto';
import { Chat } from './Pages/Chat/Chat';
import { LoginRegister } from './Pages/LoginRegister/LoginRegister';
import { Reserva } from './Pages/Reserva/Reserva';
import { ProtectedRouter } from './components/ProtectedRouter/ProtectedRouter';
import { useAuthStore } from './store/auth';
import User from './Pages/User/User';

function App() {
  const { isAuth } = useAuthStore();

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/instalaciones' element={<Instalaciones />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/acceso' element={<LoginRegister />} />
          <Route element={<ProtectedRouter isAuth={isAuth} />}>
            <Route path='/chat' element={<Chat />} />
            <Route path='/reservar' element={<Reserva />} />
            <Route path='/user/:id' element={<User />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

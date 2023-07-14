import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <Container className='text-secondary'>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
      </Container>
    </>

  );
}

export default App;

import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import imagen_is from '../assets/imagen_volley_is.jpg'

function Login() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifica si el usuario y la contraseña son correctos
    if (username === 'usuario' && password === 'contrasena') {
      setLoggedIn(true);
      navigate('/HomePageA')
      setError('');
    } else {
      setLoggedIn(false);
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleVisit = () => {
    setLoggedIn(true);
    navigate('/HomePage')
  };

  return (
    <div className="Login">
      {loggedIn ? (
        navigate('/PagAdmin')
      ) : (
        <div className="login-container">
          <img src={imagen_is} alt="Imagen de volley playa" />
          <h2>Iniciar sesión</h2>
          {error && <div className="error">{error}</div>}
          <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Iniciar sesión</button>
          <button onClick={handleVisit}>Visita</button>
        </div>
      )}
    </div>
  );
}

export default Login;

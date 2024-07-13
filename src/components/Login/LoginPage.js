import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginPage.css';
import imagem from '../../img/image.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Simulação de sucesso de login
    if (email === 'user@example.com' && password === 'password') {
      const token = 'fake-jwt-token';
      localStorage.setItem('jwtToken', token); // Armazena o token JWT

      // Define loggedIn como true para redirecionar
      setLoggedIn(true);
    } else {
      setError('Credenciais inválidas. Por favor, verifique seu email e senha.');
    }
  };

  // Redireciona para a rota '/usertable' se loggedIn for true
  if (loggedIn) {
    return <Redirect to="/UserTable" />;
  }

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={imagem} alt="Imagem do canto direito" />
      </div>
      <div className="login-section">
        <h2>Bem vindo</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação
import './LoginPage.css';
import imagem from '../../img/image.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook de navegação

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulação de sucesso de login
    const token = 'fake-jwt-token';
    localStorage.setItem('jwtToken', token); // Armazena o token JWT
    navigate('/usertable'); // Navega para a UserTable
  };

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
          <div className="button"> 
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

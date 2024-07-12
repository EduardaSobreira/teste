import React, { useState } from 'react';
import './LoginPage.css';
import imagem from '../../img/Group.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const credentials = btoa(`${email}:${password}`);
    try {
      const response = await fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`
        }
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.response.token;
        localStorage.setItem('jwtToken', token); // Armazena o token JWT
        // Redirecionar ou executar outras ações pós-login
      } else if (response.status === 400) {
        const data = await response.json();
        setError(data.response || 'Erro ao autenticar. Por favor, verifique suas credenciais.');
      } else {
        setError('Erro desconhecido. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
    }
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
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

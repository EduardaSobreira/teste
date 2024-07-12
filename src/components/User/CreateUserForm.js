import React, { useState } from 'react';

function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          accessLevel,
          password
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.response === 'user-created') {
          alert('Usuário criado com sucesso!');
          setName('');
          setEmail('');
          setAccessLevel('');
          setPassword('');
        } else {
          setError('Erro ao criar usuário. Por favor, tente novamente.');
        }
      } else {
        setError('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Nível de Acesso:</label>
        <input
          type="number"
          value={accessLevel}
          onChange={(e) => setAccessLevel(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Criar Usuário</button>
    </form>
  );
}

export default CreateUserForm;

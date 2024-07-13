// UserTable.js

import React, { useState, useEffect } from 'react';
import './UserTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Número de usuários por página

  // Simulação de lista de usuários (substitua com a sua lógica de obtenção de dados)
  useEffect(() => {
    // Aqui você pode buscar os usuários de uma API, por exemplo
    const fetchUsers = async () => {
      // Simulando dados de usuários
      const usersData = [
        { id: 1, name: 'João', email: 'joao@example.com', accessLevel: 3 },
        { id: 2, name: 'Maria', email: 'maria@example.com', accessLevel: 4 },
        { id: 3, name: 'Pedro', email: 'pedro@example.com', accessLevel: 2 },
        // Adicione mais usuários conforme necessário
      ];
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  // Lógica para paginação
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Função para alterar página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Funções para editar e excluir usuário (simulação)
  const handleEditUser = (id) => {
    console.log(`Editar usuário com ID ${id}`);
    // Implemente a lógica para editar usuário
  };

  const handleDeleteUser = (id) => {
    console.log(`Excluir usuário com ID ${id}`);
    // Implemente a lógica para excluir usuário
  };

  const handleAddUser = () => {
    console.log('Adicionar usuário');
    // Implemente a lógica para adicionar um novo usuário
    // Isso pode incluir a abertura de um modal ou navegação para uma nova página de formulário
  };

  return (
    <div className="user-table-container">
      <div className="table-header">
        <h1>Tabela de Usuários</h1>
        <button className="add-user-button" onClick={handleAddUser}>
          <FontAwesomeIcon icon={faPlus} className="add-icon" />
          Adicionar Usuário
        </button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Nível de Acesso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.accessLevel}</td>
              <td>
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => handleEditUser(user.id)} />
                <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => handleDeleteUser(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Paginação */}
      <div className="pagination">
        <button onClick={() => paginate(1)}>1</button>
        <button onClick={() => paginate(2)}>2</button>
        {/* Adicione mais botões conforme o número de páginas */}
      </div>
    </div>
  );
};

export default UserTable;

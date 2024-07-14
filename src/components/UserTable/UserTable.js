import React from 'react';
import './UserTable.css'; // Adicione o caminho correto para o arquivo CSS

function UserTable() {
  return (
    <div className="user-table-container">
      <h1>Tabela de Usuários</h1>
      <button>Adicionar Usuário</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Nível de Acesso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemplo de linha de usuário */}
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>3</td>
            <td>
              <button>✏️</button>
              <button>🗑️</button>
            </td>
          </tr>
          {/* Adicione mais linhas de usuários conforme necessário */}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

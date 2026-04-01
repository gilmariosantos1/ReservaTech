import "./ListarColaborador.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listColaborador, removeColaborador } from "../services/ColaboradorService";

const ListarColaborador = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    carregarColaboradores();
  }, []);

  const carregarColaboradores = async () => {
    try {
      setLoading(true);
      const response = await listColaborador();
      setColaboradores(response.data);
      setError(null);
    } catch (err) {
      console.error("Erro ao carregar colaboradores:", err);
      setError("Erro ao carregar colaboradores");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este colaborador?")) {
      try {
        await removeColaborador(id);
        setColaboradores(colaboradores.filter(c => c.id !== id));
        alert("Colaborador deletado com sucesso!");
      } catch (err) {
        console.error("Erro ao deletar colaborador:", err);
        alert("Erro ao deletar colaborador");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/editar-colaborador/${id}`);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleNovoColaborador = () => {
    navigate("/colaborador");
  };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={handleBackToHome}>
          ←
        </button>
        <h1>Colaboradores</h1>
        <button className="add-button" onClick={handleNovoColaborador}>
          + Novo
        </button>
      </header>

      {loading && <div className="loading">Carregando...</div>}
      {error && <div className="error">{error}</div>}

      {!loading && colaboradores.length === 0 && (
        <div className="empty-state">
          <p>Nenhum colaborador cadastrado</p>
          <button onClick={handleNovoColaborador} className="btn-novo">
            Cadastrar Primeiro Colaborador
          </button>
        </div>
      )}

      {!loading && colaboradores.length > 0 && (
        <div className="table-container">
          <table className="colaboradores-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>Matrícula</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {colaboradores.map((colaborador) => (
                <tr key={colaborador.id}>
                  <td>{colaborador.id}</td>
                  <td>{colaborador.nome}</td>
                  <td>{colaborador.email}</td>
                  <td>{colaborador.telefone}</td>
                  <td>{colaborador.cpf}</td>
                  <td>{colaborador.matricula}</td>
                  <td className="acoes">
                    <button 
                      className="btn-editar" 
                      onClick={() => handleEdit(colaborador.id)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn-deletar" 
                      onClick={() => handleDelete(colaborador.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListarColaborador;

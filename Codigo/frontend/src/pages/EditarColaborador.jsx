import "./EditarColaborador.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getColaborador, updateColaborador } from "../services/ColaboradorService";

const EditarColaborador = () => {
  const { id } = useParams();
  const [colaborador, setColaborador] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    matricula: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    carregarColaborador();
  }, [id]);

  const carregarColaborador = async () => {
    try {
      setLoading(true);
      const response = await getColaborador(id);
      setColaborador(response.data);
      setError(null);
    } catch (err) {
      console.error("Erro ao carregar colaborador:", err);
      setError("Erro ao carregar colaborador");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate("/listar-colaboradores");
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await updateColaborador(id, colaborador);
      alert("Colaborador atualizado com sucesso!");
      navigate("/listar-colaboradores");
    } catch (error) {
      console.error("Erro ao atualizar colaborador:", error);
      alert("Ocorreu um erro ao atualizar o colaborador. Por favor, tente novamente.");
    }
  }

  if (loading) {
    return <div className="container"><p>Carregando...</p></div>;
  }

  if (error) {
    return (
      <div className="container">
        <p className="error">{error}</p>
        <button onClick={handleBackToHome}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={handleBackToHome}>
          ←
        </button>
        <h1>Editar Colaborador</h1>
      </header>

      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="column">
            <div className="field">
              <label htmlFor="nome">Nome Completo</label>
              <input 
                id="nome" 
                type="text" 
                placeholder="Digite seu nome completo" 
                value={colaborador.nome} 
                onChange={(e) => setColaborador({...colaborador, nome: e.target.value})} 
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Digite seu email" 
                value={colaborador.email} 
                onChange={(e) => setColaborador({...colaborador, email: e.target.value})} 
              />
            </div>

            <div className="field">
              <label htmlFor="telefone">Telefone</label>
              <input 
                id="telefone" 
                type="tel" 
                placeholder="(00) 00000-0000" 
                value={colaborador.telefone} 
                onChange={(e) => setColaborador({...colaborador, telefone: e.target.value})} 
              />
            </div>
          </div>

          <div className="divider" />

          <div className="column">
            <div className="field">
              <label htmlFor="cpf">CPF</label>
              <input 
                id="cpf" 
                type="text" 
                placeholder="000.000.000-00" 
                value={colaborador.cpf} 
                onChange={(e) => setColaborador({...colaborador, cpf: e.target.value})} 
              />
            </div>

            <div className="field">
              <label htmlFor="dataNascimento">Data de nascimento</label>
              <input 
                id="dataNascimento" 
                type="date" 
                value={colaborador.dataNascimento} 
                onChange={(e) => setColaborador({...colaborador, dataNascimento: e.target.value})} 
              />
            </div>

            <div className="field">
              <label htmlFor="matricula">Matrícula</label>
              <input 
                id="matricula" 
                type="text" 
                placeholder="Digite sua matricula" 
                value={colaborador.matricula} 
                onChange={(e) => setColaborador({...colaborador, matricula: e.target.value})} 
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditarColaborador;

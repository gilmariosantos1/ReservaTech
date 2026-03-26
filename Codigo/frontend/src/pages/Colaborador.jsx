import "./Colaborador.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createColaborador } from "../services/ColaboradorService";

const Colaborador = () => {
  const [colaborador, setColaborador] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    matricula: ""
  });

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await createColaborador(colaborador);
      alert("Colaborador cadastrado com sucesso!");
      navigate("/HomeMenu");
    } catch (error) {
      console.error("Erro ao cadastrar colaborador:", error);
      alert("Ocorreu um erro ao cadastrar o colaborador. Por favor, tente novamente.");
    }
  }

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={handleBackToHome}>
          ←
        </button>
        <h1>Cadastro Colaborador</h1>
      </header>

      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="column">
            <div className="field">
              <label htmlFor="nome">Nome Completo</label>
              <input id="nome" type="text" placeholder="Digite seu nome completo" value={colaborador.nome} onChange={(e) => setColaborador({...colaborador, nome: e.target.value})} />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Digite seu email" value={colaborador.email} onChange={(e) => setColaborador({...colaborador, email: e.target.value})} />
            </div>

            <div className="field">
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" type="tel" placeholder="(00) 00000-0000" value={colaborador.telefone} onChange={(e) => setColaborador({...colaborador, telefone: e.target.value})} />
            </div>
          </div>

          <div className="divider" />

          <div className="column">
            <div className="field">
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" placeholder="000.000.000-00" value={colaborador.cpf} onChange={(e) => setColaborador({...colaborador, cpf: e.target.value})} />
            </div>

            <div className="field">
              <label htmlFor="dataNascimento">Data de nascimento</label>
              <input id="dataNascimento" type="date" placeholder="00/00/0000" value={colaborador.dataNascimento} onChange={(e) => setColaborador({...colaborador, dataNascimento: e.target.value})} />
            </div>

            <div className="field">
              <label htmlFor="matricula">Matrícula</label>
              <input id="matricula" type="text" placeholder="Digite sua matricula" value={colaborador.matricula} onChange={(e) => setColaborador({...colaborador, matricula: e.target.value})} />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default Colaborador;
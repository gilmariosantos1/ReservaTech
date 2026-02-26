import "./Colaborador.css";
import { useNavigate } from "react-router-dom";

const Colaborador = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={handleBackToHome}>
          ←
        </button>
        <h1>Cadastro Colaborador</h1>
      </header>

      <div className="form-container">
        <div className="column">
          <div className="field">
            <label htmlFor="nome">Nome Completo</label>
            <input id="nome" type="text" placeholder="Digite seu nome completo" />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Digite seu email" />
          </div>

          <div className="field">
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="tel" placeholder="(00) 00000-0000" />
          </div>
        </div>

        <div className="divider" />

        <div className="column">
          <div className="field">
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" placeholder="000.000.000-00" />
          </div>

          <div className="field">
            <label htmlFor="dataNascimento">Data de nascimento</label>
            <input id="dataNascimento" type="date" placeholder="00/00/0000" />
          </div>

          <div className="field">
            <label htmlFor="matricula">Matrícula</label>
            <input id="matricula" type="text" placeholder="Digite sua matricula" />
          </div>
        </div>
      </div>

      <button className="submit-button">Cadastrar</button>
    </div>
  );
};

export default Colaborador;
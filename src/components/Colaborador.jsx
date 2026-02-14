import { useNavigate } from 'react-router-dom'
//import "./colaborador.css";

const Colaborador = () =>  {
  return (
    <div className="container">
      <header className="header">
        <button className="button">←</button>
        <h1>Cadastro Colaborador</h1>
      </header>

      <div className="form-container">
        <div className="column">
          <div className="field">
            <label>Nome Completo</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="field">
            <label>Telefone</label>
            <input type="tel" />
          </div>
        </div>

        <div className="dividir" />

        <div className="column">
          <div className="field">
            <label>CPF</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Data de nascimento</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Matrícula</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <button className="submit-button">Cadastrar</button>
    </div>
  );
}
export default Colaborador;
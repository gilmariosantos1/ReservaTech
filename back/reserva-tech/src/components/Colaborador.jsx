import "./Colaborador.css";

const Colaborador = () => {
  return (
    <div className="container">
      <header className="header">
        <button className="back-button">←</button>
        <h1>Cadastro Colaborador</h1>
      </header>

      <div className="form-container">
        <div className="column">
          <div className="field">
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </div>

          <div className="field">
            <label>Telefone</label>
            <input type="tel" placeholder="(00) 00000-0000" />
          </div>
        </div>

        <div className="divider" />

        <div className="column">
          <div className="field">
            <label>CPF</label>
            <input type="text" placeholder="000.000.000-00" />
          </div>

          <div className="field">
            <label>Data de nascimento</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Matrícula</label>
            <input type="text" placeholder="Digite sua matrícula" />
          </div>
        </div>
      </div>

      <button className="submit-button">Cadastrar</button>
    </div>
  );
}

export default Colaborador;
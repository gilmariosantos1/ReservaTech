
import './Equipamento.css'

const Equipamento = () =>  {

    return (
      
        <div className='container'>
      <header class="header">
        
        <a href="HomeMenu"><button className="back-button">← </button></a>
        <h1>Cadastro Equipamento</h1>
      </header>
               
            <form >
                <label>Nome:</label>
                <input type="text" name="equipamento" required/>
                
                <label>Número de Série:</label>
                <input type="text" name="serie" required/>
                
                <label>Descrição:</label>
                 <input type="text" name="serie" required/>
                

                

                
                <button type="submit">Cadastrar</button>
            </form>
    </div>
    )
}

export default Equipamento
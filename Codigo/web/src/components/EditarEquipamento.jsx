
import './EditarEquipamento.css'

const Editareq = () => {

    return (

        <div className='container'>

            <form >
                <label>Nome:</label>
                <input type="text" name="equipamento" required />

                <label>Número de Série:</label>
                <input type="text" name="serie" required />

                <label>Descrição:</label>
                <select name="" id=""></select>

                <button type="submit">editar</button>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Editareq
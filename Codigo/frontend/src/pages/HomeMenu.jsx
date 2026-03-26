import { useNavigate } from 'react-router-dom'
import './HomeMenu.css'

const HomeMenu = () => {
    const navigate = useNavigate()

    const handleVoltar = () => {
        navigate('/')
    }

    const handleColaborador = () => {
        navigate('/Colaborador')
    }

    const handleEquipamento = () => {
        navigate('/Equipamento')
    }

    const handleEditarEquipamento = () => {
        navigate('/EditarEquipamento')
    }

    const handleReserva = () => {
        navigate('/Reserva')
    }

    const handleConsultarReserva = () => {
        navigate('/ConsultarReserva')
    }

    const handleEditarReserva = () => {
        navigate('/EditarReserva')
    }

    return (
        <>
            <nav className="nav-cad">
                <button onClick={handleVoltar}>Voltar</button>
            </nav>

            <div className="centro">
                <img src="/Imagens/Design sem nome (10).png" alt="ReservaTech Logo" />

                <div className="button">
                    <div className="centro-cadastro">
                        <p>Cadastrar</p>

                        <div className="centro-cadastro-button">
                            <button onClick={handleColaborador}>Cadastrar colaborador</button>
                            <button onClick={handleEquipamento}>Cadastrar equipamento</button>
                            <button onClick={handleEditarEquipamento}>Editar Equipamento</button>
                        </div>
                    </div>

                    <div className="centro-reserva">
                        <p>Reservas</p>

                        <div className="centro-reserva-button">
                            <button onClick={handleReserva}>Reservar equipamento</button>
                            <button onClick={handleConsultarReserva}>Consultar reservas</button>
                            <button onClick={handleEditarReserva}>Editar reserva</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMenu
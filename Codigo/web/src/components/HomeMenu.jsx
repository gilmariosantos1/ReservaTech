import { useNavigate } from 'react-router-dom'
import './HomeMenu.css'

const HomeMenu = () => {
    const navigate = useNavigate()

    const handleVoltar = () => {
        navigate('/')
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
                            <a href="Colaborador">Cadastrar colaborador</a>
                            <a href="Equipamento">Cadastrar equipamento</a>
                        </div>
                    </div>

                    <div className="centro-reserva">
                        <p>Reservas</p>
                        
                        <div className="centro-reserva-button">
                            <a href="#">Reservar equipamento</a>
                            <a href="ConsultaReserva">Consultar Reservas</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMenu
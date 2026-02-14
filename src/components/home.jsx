import { useNavigate } from 'react-router-dom'
import './home.css'

const Home = () => {
    const navigate = useNavigate()

    const handleIniciar = () => {
        navigate('/reserva')
    }

    return (
        <>
            <div className="centro">
                <img src="/Imagens/Design sem nome (10).png" alt="ReservaTech Logo" />
                <div className="button">
                    <button onClick={handleIniciar} className="centro-button">
                        Iniciar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home

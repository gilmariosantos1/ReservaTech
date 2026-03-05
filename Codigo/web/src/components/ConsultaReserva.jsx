import './ConsultaReserva.css'

const ConsultaReserva = () => {

    return (

        <div className='container consulta-reserva'>

            <header>
                <a href="HomeMenu"><button className="back-button">←</button></a>
                <h2>RESERVAS</h2>
            </header>

            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Data Reserva</th>
                        <th>Data Entrega</th>
                        <th>Horário Saída</th>
                        <th>Horário Entrega</th>
                        <th>N° equipamento</th>
                        <th>Motivo</th>
                        <th>Status</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>1875454567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>187512567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>187512567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>187512567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>187512567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>187512567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                    <tr>
                        <td>156827</td>
                        <td>09/02/2026</td>
                        <td>--/--/--</td>
                        <td>10:00</td>
                        <td>--:--</td>
                        <td>187512567515</td>
                        <td>Aula</td>
                        <td>Reservada</td>
                        <td className="editar-btn"><img src="/Imagens/editar.png" alt="Imagem" /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ConsultaReserva
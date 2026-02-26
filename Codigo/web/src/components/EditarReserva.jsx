import { useState } from 'react'
import './Reserva.css' // Certifique-se de que o nome do arquivo CSS está correto

const EditarReserva = () =>  {

    return (
        <>
           <div className='container'>
                <main>
                    <div className='main-header'>
                        {/* Substitua o src pela rota correta da sua imagem de seta */}
                        <img src="src/assets/imagens/arrow_left.png" alt="seta_voltar" />
                        <h2>Editar reserva</h2>
                        <div></div>
                    </div>
                    <div className='main-form'>
                        <form action="">
                            <div className='main-form-content'>
                                <div className='main-form-content-left'>
                                    <div className='form-input'>
                                        <label htmlFor="matricula">Matrícula do colaborador</label>
                                        <input type="text" name='matricula' defaultValue="156827" />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="data-reserva">Data da reserva</label>
                                        <input type="text" name='data-reserva' defaultValue="09/02/2026" />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="data-entrega">Data da entrega</label>
                                        <input type="text" name='data-entrega' defaultValue="--/--/----" />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="numero-serie">Número de série do equipamento</label>
                                        <input type="text" name='numero-serie' defaultValue="187512567515" />
                                    </div>
                                </div>
                                <div className='main-form-content-right'>
                                    <div className='form-input'>
                                        <label htmlFor="motivo">Motivo</label>
                                        <input type="text" name='motivo' defaultValue="Aula" />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="horario-reserva">Horário da reserva</label>
                                        <input type="text" name='horario-reserva' defaultValue="10:00" />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="horario-entrega">Horário da entrega</label>
                                        <input type="text" name='horario-entrega' defaultValue="--:--" />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="status">Status:</label>
                                        <select name="status" id="status" defaultValue="">
                                            <option value="" disabled>Selecione o status da reserva</option>
                                            <option value="reservado">Reservado</option>
                                            <option value="pendente">Pendente</option>
                                            <option value="cancelado">Cancelado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='main-form-actions'>
                                <button type='button' className='btn-editar'>Editar</button>
                                <button type='button' className='btn-excluir'>Excluir</button>
                            </div>
                        </form>
                    </div>
                </main>
           </div>
        </>
    )
}

export default EditarReserva
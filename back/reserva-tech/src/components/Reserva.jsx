import { useState } from 'react'
import './Reserva.css'

const Reserva = () =>  {

    return (
        <>
           <div className='container'>
                <main>
                    <div className='main-header'>
                        <img src="src/assets/imagens/arrow_left.png" alt="seta_voltar" />
                        <h2>Reserva</h2>
                        <div></div>
                    </div>
                    <div className='main-form'>
                        <form action="">
                            <div className='main-form-content'>
                                <div className='main-form-content-left'>
                                    <div className='form-input'>
                                        <label htmlFor="matricula">Matrícula do colaborador</label>
                                        <input type="text" name='matricula' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="data-reserva">Data da reserva</label>
                                        <input type="text" name='data-reserva' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="data-entrega">Data da entrega</label>
                                        <input type="text" name='data-entrega' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="numero-serie">Número de série do equipamento</label>
                                        <input type="text" name='numero-serie' />
                                    </div>
                                </div>
                                <div className='main-form-content-right'>
                                    <div className='form-input'>
                                        <label htmlFor="motivo">Motivo</label>
                                        <input type="text" name='motivo' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="horario-reserva">Horário da reserva</label>
                                        <input type="text" name='horario-reserva' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="horario-entrega">Horário da entrega</label>
                                        <input type="text" name='horario-entrega' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="status">Status:</label>
                                        <select name="status" id="status">
                                            <option value="">Selecione o status da reserva</option>
                                            <option value="reservado">Reservado</option>
                                            <option value="pendente">Pendente</option>
                                            <option value="cancelado">Cancelado</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className='main-form-submit'>
                                <button type='submit'>Reservar</button>
                            </div>
                        </form>
                    </div>
                </main>
           </div>
        </>
    )

}

export default Reserva

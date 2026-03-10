import api from './api'

export const listReservas = (params = {}) =>
  api.get('/reservas', { params })

export const getReserva = (id) =>
  api.get(`/reservas/${id}`)

export const createReserva = (
  equipamentoId,
  dataReserva,
  dataEntrega,
  horarioInicio,
  horarioFim,
  motivo,
  status
) =>
  api.post('/reservas', {
    equipamentoId,
    dataReserva,
    dataEntrega,
    horarioInicio,
    horarioFim,
    motivo,
    status
  })

export const updateReserva = (
  id,
  equipamentoId,
  dataReserva,
  dataEntrega,
  horarioInicio,
  horarioFim,
  motivo,
  status
) =>
  api.put(`/reservas/${id}`, {
    equipamentoId,
    dataReserva,
    dataEntrega,
    horarioInicio,
    horarioFim,
    motivo,
    status
  })

export const removeReserva = (id) =>
  api.delete(`/reservas/${id}`)
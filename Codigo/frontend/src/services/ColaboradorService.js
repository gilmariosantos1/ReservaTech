import api from './api';

export const listColaborador = (params = {}) => api.get('/colaborador', { params });
export const getColaborador = (id) => api.get(`/colaborador/${id}`);
export const createColaborador = (data) => api.post('/colaborador', data);
export const updateColaborador = (id, data) => api.put(`/colaborador/${id}`, data);
export const removeColaborador = (id) => api.delete(`/colaborador/${id}`);
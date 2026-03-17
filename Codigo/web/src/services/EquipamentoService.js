import api from './api';

export const listEquipamentos = (params = {}) => api.get('/equipamentos', { params });
export const getEquipamento = (id) => api.get(`/equipamentos/${id}`);
export const createEquipamento = (data) => api.post('/equipamentos', data);
export const updateEquipamento = (id, data) => api.put(`/equipamentos/${id}`, data);
export const removeEquipamento = (id) => api.delete(`/equipamentos/${id}`);
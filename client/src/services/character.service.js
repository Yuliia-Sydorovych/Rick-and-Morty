import api from '../hooks/useAxios';

const getCharacterById = (id) => {
  return api.get(`/character/${id}`);
};

export {
  getCharacterById
};
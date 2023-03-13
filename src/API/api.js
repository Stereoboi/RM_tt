import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (page) => {
  const response = await axios.get("/character", {
    params: {
      page: page,
    },
  });

  return response;
};
export const fetchCharacterById = async (id) => {
  const response = await axios.get(`/character/${id}`, {});

  return response;
};

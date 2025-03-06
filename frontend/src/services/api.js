import axios from 'axios';

const API_URL = 'http://localhost:5000/api/entries';

export const getEntries = async () => {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
};

export const addEntry = async (entry) => {
    const response = await axios.post(`${API_URL}/add`, entry);
    return response.data;
};

export const deleteEntry = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
};

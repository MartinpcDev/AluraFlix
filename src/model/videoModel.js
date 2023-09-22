import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://65025c45a0f2c1f3faea7499.mockapi.io'
});

export const getData = async (url, setData) => {
	const response = await api.get(url);
	setData(response.data);
};

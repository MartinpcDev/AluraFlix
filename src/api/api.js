import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://fakeapialuraflix.onrender.com/'
});

export const getData = async (url, setData) => {
	const response = await api.get(url);
	setData(response.data);
};

import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://65025c45a0f2c1f3faea7499.mockapi.io'
});

export const getData = async (url, setData) => {
	const response = await api.get(url);
	await setData(response.data);
};

export const editData = async (url, dataform) => {
	const response = await api.put(url, dataform);
};

export const postData = async (url, dataform) => {
	const response = await api.post(url, dataform);
};

export const deleteData = async url => {
	const response = await api.delete(url);
};

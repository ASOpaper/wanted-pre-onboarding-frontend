import axios from 'axios';

const customApi = axios.create({
	baseURL : 'https://www.pre-onboarding-selection-task.shop/',
	headers : {
		Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		'Content-Type': 'application/json'
	}
});

customApi.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

export default customApi;
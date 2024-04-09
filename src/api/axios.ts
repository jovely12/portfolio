import axios from 'axios';
const BASE_URL = 'https://port-0-portfolio-server-2aat2clurqq3vo.sel5.cloudtype.app';

export default axios.create({
	baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
})
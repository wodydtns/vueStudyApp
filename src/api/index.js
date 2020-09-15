import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  // 공통 설정 세팅
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  //axios interceptor로 Authorization 값 변경
  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };

import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

//axios 초기화 함수
function createInstanceWithAuth(url) {
  // 공통 설정 세팅
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  //axios interceptor로 Authorization 값 변경
  return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

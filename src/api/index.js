import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//axios 초기화 함수
function createInstance() {
  // 공통 설정 세팅
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  //axios interceptor로 Authorization 값 변경
  return setInterceptors(instance);
}
const instance = createInstance();

//회원가입 API
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

//학습노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get('posts');
}

//학습노트 데이터를 생성하는 API
function createPost(postData) {
  return instance.post('posts', postData);
}

export { registerUser, loginUser, fetchPosts, createPost };

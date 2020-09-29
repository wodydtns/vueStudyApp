//학습노트 CRUD
//학습노트 데이터를 조회하는 API
import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

//학습노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}

export { createPost, fetchPosts };

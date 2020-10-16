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
//학습노트 데이터 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

//특정 학습 노트를 조회하는 api
function fetchPost(postId) {
  return posts.get(postId);
}
// 학습 노트 데이터를 수정하는 api
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { createPost, fetchPosts, deletePost, fetchPost, editPost };

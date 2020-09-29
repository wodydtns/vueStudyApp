<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul>
        <postListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></postListItem>
      </ul>
      <router-link to="/add" class="create-button">
        <i class="ion-md-add"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/posts';
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      console.log(data);
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>

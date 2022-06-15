<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <table>
    <th>id</th>
    <th>user id</th>
    <th>title</th>
    <th>body</th>
    <tr v-for="article in getArticles()" :key="article.id">
      <td>{{ article.id }}</td>
      <td>{{ article.user_id }}</td>
      <td>{{ article.title }}</td>
      <td>{{ article.body }}</td>
    </tr>
  </table>
</template>

<script>
import { ArticleStore } from "./store";
export default {
  name: "App",
  setup() {
    const { getArticles, loadArticles } = ArticleStore();

    return {
      getArticles,
      loadArticles,
    };

    // ...
  },
  mounted() {
    this.loadArticles();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

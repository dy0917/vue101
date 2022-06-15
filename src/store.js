import { defineStore } from "pinia";
import axios from "axios";

export const ArticleStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    data: []
  }),
  getters: {
    doubleCount: (state) => {
      return () => {
        return state.counter * 2;
      };
    },
    getArticleById: (state) => {
      return (id) => {
        return state.data?.find((e) => e.id === id);
      };
    },
    getArticles: (state) => {
      return () => {
        return state.data;
      };
    }
  },
  actions: {
    async increment() {
      this.counter++;
    },
    async loadArticles(param = false) {
      const s = await axios.get("https://gorest.co.in/public/v2/posts");
      this.data = s.data;
    }
  }
});

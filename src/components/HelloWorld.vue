<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input v-model="text" />
    </div>
    <div>
      {{ text }}
    </div>
    <div>
      <button @click="increase">Add 1</button>
    </div>
    {{ amount }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      text: undefined,
      amount: 0,
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    increase() {
      this.amount++;
    },
  },
  unmounted() {
    console.log("unmount");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

function add() {
  let a = 1;
  console.log(a);
}

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style>
body {
  padding: 5px;
  height: 100%;
  font-size: 16px;
  color: #ccc;
  background-color: #ccc;
}
</style>

<template>
  <div class="title-page text-center mb-5">
    <router-link to="/">
      <img width="15%" src="../assets/img/logo.png">
    </router-link>

    <h1 class="m-0">{{ titleName }}</h1>
  </div>
</template>

<script>
  export default {
    name: "TitlePage",
    props: {
      titleName: {
        type: String,
        required: false,
        default: ''
      }
    }
  };
</script>


<style scoped>

</style>

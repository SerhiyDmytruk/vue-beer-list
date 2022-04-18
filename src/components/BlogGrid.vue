<template>
  <div class="container">
    <div class="row justify-content-md-center flex-row" v-if="blogData">
      <section
        v-for="(post, index) in blogData"
        :key="index"
        class="col-sm-6 col-md-4 col-lg-3 card mb-2">
        <img :src="post.image_url" class="img-thumbnail border-0" :data-post-id="post.id" :alt="post.name">

        <div class="card-body">
          <p class="card-title">
            <b>{{ post.name }}</b>
          </p>
          <p class="card-text">
            <small>
              <mark>First brewed</mark>
            </small> -
            <b>{{ post.first_brewed }}</b>
          </p>
          <p class="card-text">
            <small>
              <mark>Abv</mark>
            </small> -
            <b>{{ post.abv }}</b>
          </p>
          <p class="card-text">
            <small>
              <mark>Srm</mark>
            </small> -
            <b>{{ post.srm }}</b>
          </p>

          <router-link class="btn btn-primary" :to="{ path: 'item/' + post.id }">Read more</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "BlogGrid",
    computed: {
      ...mapGetters({
        blogData: 'block_data'
      })
    },
  }
</script>

<style scoped>
  .card-title {
    height: 50px;
  }

  .img-thumbnail {
    max-height: 250px;
    margin: 0 auto 15px;
    display: block;
  }
</style>

<template>
  <div class="container">
    <div class="row justify-content-md-center flex-row" v-if="post">

      <section class="col-lg-6">
        <img :src="post.image_url" class="img-thumbnail border-0 " :alt="post.name">
      </section>
      <section class="col-lg-6">
        <div class="card-body">
          <p class="card-title">
            <b>{{ post.name }}</b>
          </p>

          <p class="card-title">{{ post.tagline }}</p>

          <ul class="list-group">
            <li class="list-group-item"><mark>Id</mark> <b>{{ post.id }}</b> </li>
            <li class="list-group-item"><mark>First brewed</mark> <b>{{ post.first_brewed }}</b></li>
            <li class="list-group-item"><mark>Abv</mark> <b>{{ post.abv }}</b></li>
            <li class="list-group-item"><mark>Ibu</mark> <b>{{ post.ibu }}</b></li>
            <li class="list-group-item"><mark>Ebc</mark> <b>{{ post.ebc }}</b></li>
            <li class="list-group-item"><mark>Srm</mark> <b>{{ post.srm }}</b></li>
            <li class="list-group-item"><mark>Ph</mark> <b>{{ post.ph }}</b></li>
            <li class="list-group-item"><mark>Volume</mark> <b>{{ post.volume.value }} {{ post.volume.unit }}</b></li>
          </ul>

          <p class="card-title mt-3">{{ post.description }}</p>

          <router-link
            class="btn btn-primary"
            to="/">
            Back to category list
          </router-link>

        </div>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    name: "BlogItem",
    props: {
      post: {
        type: [Object, Boolean],
        required: true
      }
    }
  }
</script>

<style scoped>

</style>

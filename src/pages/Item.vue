<template>
  <div>
    <BlogItem :post="posts"/>
  </div>
</template>

<script>
    import BlogItem from "@/components/BlogItem";

    export default {
      name: "Item",
      components: {BlogItem},
      computed: {
        posts() {
          return this.$store.getters.getPostById(this.$route.params.id);
        }
      }
    }
</script>

<style scoped>

</style>

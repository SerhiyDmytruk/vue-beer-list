<template>
  <div id="app" ref="test">
    <TitlePage title-name="Beers list"/>
    <router-view/>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TitlePage
  },
  methods: {
    ...mapActions(["fetchData"])
  },
  created() {
    this.fetchData();
  }
};
</script>


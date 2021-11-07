<template>
  <div class="container">
    <Header />
    <Hero />
    <!-- <Footer /> -->
    <Card />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import Header from "@/components/header.vue";
import Hero from "@/components/hero.vue";
//import Footer from "@/components/footer.vue";
import Card from "@/components/card.vue";

export default defineComponent({
  components: {
    Header,
    Hero,
    Card,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(
        "https://api.jsonbin.io/b/617086bd9548541c29c61eef/2"
      );
      console.log(data.news);
      this.users = data.news;
    },
  },
});
</script>

<style>
.container {
  width: 100%;
}
</style>

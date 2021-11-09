<template>
  <Header />
  <div class="reader">
    <div
      class="reader__image-wrapper"
      :style="{ backgroundImage: `url(${getNews.url_image})` }"
    >
      <p>{{ getNews.title }}</p>
      <p>{{ getNews.date }} | {{ getNews.category }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="reader__waves"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,112C672,96,768,128,864,154.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
  <div class="reader__long-text">
    <p>
      {{ getNews.long_text }}
    </p>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
// @ is an alias to /src
export default {
  name: "Read",
  components: { Header, Footer },
  computed: {
    getNews() {
      return this.$store.state.news;
    },
  },
};
</script>
<style lang="scss" scoped>
.reader {
  &__image-wrapper {
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 792px;
    overflow: hidden;

    p:first-child {
      font-family: Poppins;
      font-weight: bold;
      font-size: 32px;
      line-height: 45px;
      text-align: center;
      color: #ffffff;
      margin-top: 241px;

      @media (max-width: 480px) {
        font-size: 25px;
        line-height: 36px;
      }
    }

    p:nth-child(2) {
      font-size: 10px;
      line-height: 20px;
      color: #ffffff;
      border-radius: 5px;
      text-align: center;
      margin-top: 17px;
    }

    @media (max-width: 600px) {
      height: 600px;
      padding: 0 15px;
    }
  }

  &__image {
    width: 100%;
    position: relative;
  }

  &__waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

    @media (max-width: 991px) {
      display: none;
    }
  }

  &__long-text {
    width: 100%;
    max-width: 751px;
    margin: 0 auto;
    margin-bottom: 135px;

    p {
      font-size: 16px;
      line-height: 28px;
      color: #333333;
    }

    @media (max-width: 991px) {
      margin-top: 50px;
      width: 95%;
    }
  }
}
</style>

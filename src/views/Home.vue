<template>
  <div class="container">
    <Header />
    <Hero />
    <div class="card" v-for="user in displayedPosts" :key="user.id">
      <img :src="user.url_image" alt="image cover" />
      <div class="card__description-wrapper">
        <div class="card__wrapper-texts">
          <p>{{ user.title }}</p>
          <span>
            {{ new Date(user.date).toLocaleString("pt-BR") }} |
            {{ user.category }}
          </span>
          <p>{{ user.short_text }}</p>
        </div>
        <router-link
          to="read"
          style="display: inline-block; margin: 0 auto; width: 157px"
          class="card_button"
        >
          <button class="card__button" @click="selectNew(user)">
            DESCUBRA
          </button>
        </router-link>
      </div>
    </div>

    <nav>
      <ul class="pagination">
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-if="page != 1"
            @click="page--"
          >
            Previous
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(page - 1, page + 5)"
            @click="page = pageNumber"
            :key="pageNumber.index"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>

    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import Header from "@/components/header.vue";
import Hero from "@/components/hero.vue";
import Footer from "@/components/footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Hero,
    Footer,
  },
  data() {
    return {
      users: [],
      page: 1,
      perPage: 3,
      pages: [],
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
      this.users = data.news;
    },
    selectNew(news) {
      this.$store.dispatch("getSingleNew", news);
    },
    setPages() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
  },
  computed: {
    singleNews() {
      return this.store.state.singleNews;
    },
    displayedPosts() {
      return this.paginate(this.users);
    },
  },
  watch: {
    users() {
      this.setPages();
      console.log(this.pages);
    },
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.card {
  width: 100%;
  max-width: 1140px;
  height: 873px;
  margin: 0 auto;
  padding: 0px 15px;
  margin-bottom: 60px;

  img {
    width: 100%;
    max-height: 520px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &__description-wrapper {
    height: calc(873px - 520px);
    padding-top: 60px;
    padding-bottom: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #fd749b;
    border-top: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  &__wrapper-texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p:first-child {
      width: 100%;
      font-family: Poppins;
      font-weight: bold;
      font-size: 32px;
      line-height: 45px;
      text-align: center;
      background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 0;
    }

    p:last-child {
      width: 100%;
      max-width: 870px;
      font-family: Poppins;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #333333;
      margin-top: 32px;
    }

    span {
      display: block;
      font-family: Poppins;
      font-size: 10px;
      line-height: 17px;
      color: #333333;
      text-align: center;
      margin-top: 15px;
      text-transform: uppercase;
    }
  }

  &__button {
    width: 157px;
    background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
    border-radius: 100px;
    padding: 17px 33px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
}

@media (max-width: 991px) {
  .card {
    height: auto;
    img {
    }

    &__description-wrapper {
      height: auto;
      padding-top: 30px;
    }

    &__wrapper-texts {
      p:first-child {
        font-size: 25px;
      }

      p:last-child {
      }

      span {
      }
    }

    &__button {
      margin-top: 25px;
    }
  }
}

@media (max-width: 600px) {
  .card {
    img {
    }

    &__description-wrapper {
    }

    &__wrapper-texts {
      p:first-child {
      }

      p:last-child {
        margin-top: 15px;
      }

      span {
      }
    }

    &__button {
    }
  }
}

@media (max-width: 480px) {
  .card {
    img {
    }

    &__description-wrapper {
    }

    &__wrapper-texts {
      padding-left: 20px;
      padding-right: 20px;

      p:first-child {
        font-size: 20px;
        line-height: 32px;
      }

      p:last-child {
      }

      span {
      }
    }

    &__button {
    }
  }
}

#router-link {
  display: inline-block;
  width: 100px;
}
</style>

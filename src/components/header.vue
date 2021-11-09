<template>
  <div class="header-external-container">
    <div class="container">
      <div class="header">
        <div class="header__wrapper-title">
          <router-link to="/">
            <img src="../assets/imgs/Logo.png" alt="logo" />
          </router-link>
          <div>
            <ul class="header__list">
              <router-link to="/">
                <li>Home</li>
              </router-link>
              <li>Post</li>
            </ul>
          </div>
        </div>
        <a class="header__button"
          >04 ESTRELAS <img src="../assets/imgs/star.png" alt="star" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header-external-container {
  width: 100%;
  height: 126px;
}

.container {
  width: 100%;
  height: 126px;
  max-width: 1276px;
  margin: 0 auto;
  padding-top: 29px;
  padding: 0px 15px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-top: 29px;

  &__wrapper-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 555px;
  }

  &__list {
    display: flex;
    gap: 68px;
    align-items: center;

    li {
      list-style: none;
      cursor: pointer;
      font-family: Poppins;
      font-weight: bold;
      font-size: 14px;
      color: #333333;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 157px;
    line-height: 54px;
    background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
    border-radius: 100px;
    font-family: Poppins;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;

    img {
      margin-left: 9px;
    }
  }
}

@media (max-width: 991px) {
  .header {
    &__wrapper-title {
      width: 440px;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__wrapper-title {
      width: 360px;
    }
  }
}

@media (max-width: 600px) {
  .header {
    &__wrapper-title {
      width: 100%;
    }

    &__button {
      display: none;
    }
  }
}

@media (max-width: 480px) {
  .header {
    &__list {
      gap: 20px;
    }
  }
}
</style>

<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__title-wrapper">
        <span>HOME/BLOG</span>
        <h1>O maior blog para cryptoinvestidores.</h1>
        <p>
          Fique por dentro de tudo que acontece no blog mais atualizado sobre
          cryptomoedas e mercado financeiro.
        </p>
      </div>
      <div class="hero__image">
        <img src="../assets/imgs/IMG.png" alt="img" />
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="waves"
    >
      <path
        fill="white"
        fill-opacity="1"
        d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,112C672,96,768,128,864,154.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 786px;
  //background-image: url("../assets/imgs/BG.png");
  background: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  background-repeat: no-repeat;
  background-size: 100vw;

  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1112px;
    margin: 0 auto;
    padding-top: 29px;
    padding: 0px 15px;
    padding-top: 28px;
  }

  &__title-wrapper {
    width: 384px;
    height: 255px;
    margin-top: calc(152px - 28px);

    span {
      font-family: Poppins;
      font-size: 12px;
      line-height: 18px;
      color: #ffffff;
    }

    h1 {
      width: 100%;
      max-width: 403px;
      font-family: Poppins;
      font-weight: bold;
      font-size: 40px;
      color: #ffffff;
      margin-top: 16px;
    }

    p {
      font-family: Poppins;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
      margin-top: 20px;
    }
  }

  &__image {
    img {
      width: 527px;
      height: 535px;
    }
  }

  @media (max-width: 991px) {
    margin-bottom: 65px;
  }
}

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  @media (max-width: 991px) {
    display: none;
  }
}

@media (max-width: 991px) {
  .hero {
    background-image: none;
    background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
    height: auto;
    padding-bottom: 55px;

    &__container {
      flex-direction: column;
      align-items: center;
    }

    &__title-wrapper {
      margin-top: 60px;
    }
  }
}

@media (max-width: 600px) {
  .hero {
    &__image {
      img {
        width: 427px;
        height: 435px;
      }
    }
  }
}

@media (max-width: 480px) {
  .hero {
    padding-bottom: 40px;
    &__title-wrapper {
      width: 100%;
      margin-top: 20px;

      h1 {
        font-size: 25px;
      }

      p {
        font-size: 15px;
        margin-top: 10px;
        text-align: center;
        line-height: 20px;
      }
    }

    &__image {
      img {
        width: 307px;
        height: 315px;
      }
    }
  }
}
</style>

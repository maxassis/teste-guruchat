<template>
  <div class="card">
    <img src="../assets/imgs/teste.jpg" alt="image cover" />
    <div class="card__description-wrapper">
      <div class="card__wrapper-texts">
        <p>CONHEÇA AS NOVAS CRIPTOPMOEDAS QUE CHEGARAM.</p>
        <span>19/10/2021 | BUSINESS</span>
        <p>
          Sabemos o quanto importante é ter uma ampla listagem de ativos
          disponíveis para negociação, porém, nossa prioridade é sempre a
          segurança.
        </p>
      </div>
      <a class="card__button"> DESCUBRA </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 1140px;
  height: 873px;
  margin: 0 auto;
  padding: 0px 15px;

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
  }
}

@media (max-width: 991px) {
  .card {
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
</style>

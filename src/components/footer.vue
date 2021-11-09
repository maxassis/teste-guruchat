<template>
  <div class="footer">
    <img src="../assets/imgs/logo-white.png" alt="logo white" />
    <span>© 2021 Desenvolvido por Max Assis </span>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 106px;
  background: #151515;
  padding-top: 29px;
  padding-left: 80px;
  padding-bottom: 9px;

  span {
    font-family: Poppins;
    font-size: 12px;
    color: #989898;
    mix-blend-mode: normal;
    opacity: 0.4;
    margin-top: 26.06px;
  }
}
</style>

<template lang="pug">
.header
  router-link(to="/", tag="div")
    img.header__logo(alt="Tesodev logo", src="../assets/logo.png")
</template>

<style lang="scss" scoped>
@import "../assets/_mixin.scss";

.header {
  @include display-flex;

  &__logo {
    width: 15.5rem;
    height: 6.4rem;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
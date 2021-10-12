<script>
export default {
  created() {
    this.$store.dispatch("getRecords");
  },
};
</script>

<template lang="pug">
router-view
</template>

<style lang="scss">
@import "./assets/_varaibles.scss";
@import "./assets/_mixin.scss";

* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  outline: none;
}

body {
  @include display-flex;
  flex-direction: column;
}

.btn {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  color: #fff;
  background: $base-color;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 1.4rem;

  &:hover {
    background: $base-color-hover;
    cursor: pointer;
  }
}
</style>

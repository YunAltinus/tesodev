<script>
import { mapState } from "vuex";
import Logo from "../components/logo.vue";
import Search from "../components/search.vue";
import ListItems from "../components/list-items.vue";
import AddItem from "../components/add-item.vue";

export default {
  components: {
    Logo,
    Search,
    ListItems,
    AddItem,
  },
  data() {
    return {
      isHomePage: true,
    };
  },

};
</script>

<template lang="pug">
.container
  Logo.logo

  Add-item.add-item-btn

  Search.search

  List-items.list-items( :isHomePage="isHomePage")
</template>

<style lang="scss">
.container {
  margin: 11.5rem;
  min-width: 50vw;
  height: 100vh;
  position: relative;
}
</style>

<style lang="scss" scoped>
@import "../assets/_mixin.scss";

.add-item-btn {
  position: absolute;
  right: 0;
  top: 2rem;
}

.logo {
  position: relative;

  &::before {
    content: "Search web app";
    position: absolute;
    font-size: 14px;
    line-height: 16px;
    color: #484848;
    bottom: -1.5rem;
    right: 15rem;
  }
}

.search {
  margin-top: 4.1rem;
}

.list-items {
  @include border;
  max-width: 50vw;
}
</style>
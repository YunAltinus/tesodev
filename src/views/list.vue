<script>
import { defineAsyncComponent } from 'vue'
import Logo from "../components/logo.vue";
import Search from "../components/search.vue";
import AddItemBtn from "../components/add-item.vue";

export default {
  components: {
    ListItems: defineAsyncComponent(() =>
      import('../components/list-items.vue')
    ),
    Logo,
    Search,
    AddItemBtn,
  },

  data() {
    return {
      isHomePage: false,
    };
  },

};
</script>

<template lang="pug">
.list-page
  .header 
    Logo.header__logo
    Search.search
    Add-item-btn
  
  suspense
    template(#default)
      List-items.list
    template(#fallback)
      div LOADING...

</template>

<style lang="scss" scoped>
@import "../assets/_mixin";

.list-page {
  position: relative;
  .header {
    @include display-flex;
    margin-top: 0.5rem;

    .search {
      padding: 2rem;
    }
  }

  .list {
    padding-top: 1rem;
    width: 50vw;
    margin: 0 auto;
  }
}
</style>

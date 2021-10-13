<script>
export default {
  data() {
    return {
      search: null,
    };
  },
  methods: {
    onClickForSearch() {
      // Tıkladıktan sonra istenilen veri çekilebilir
      // fakar watch ile bu işlemi "list page" zaten izliyoruz

      const result = this.$store.state.records.filter((record) => {
        return record.NameSurname.toLowerCase().includes(
          this.search.toLowerCase()
        );
      });
      this.$store.commit("getOnClickForSearch", result)
    },
  },

  watch: {
    search(value) {
      this.$store.commit("getSearchRecords", value);
    },
  },
};
</script>

<template lang="pug">
.search
  input.search__input(type="text", v-model="search")

  button.search__btn.btn(@click="onClickForSearch") Search
</template>

<style lang="scss">
@import "../assets/_varaibles.scss";
@import "../assets/_mixin.scss";

.search {
  @include display-flex;
  justify-content: space-between;

  &__input {
    height: 2.5rem;
    min-width: 50vw;
    padding: 0 1rem;
    color: #888;
    text-align: center;
    @include border;
  }

  &__btn {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
  }
}
</style>
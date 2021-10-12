<script>
export default {
  props: {
   getSelectedValue: {
     type: Function
   }
  },
  data() {
    return {
      show: false,
      selected: "",
      options: [
        "Name ascending",
        "Name descending",
        "Year ascending",
        "Year descending",
      ],
    };
  },
  methods: {
    showFunction(e) {
      this.show = !this.show;
      this.selected = e.target.textContent;
      this.getSelectedValue(this.selected)
    },
  },
};
</script>

<template lang="pug">
div
  label(@click="show = !show") Order By

  div(v-if="show")
    ul.order-list
      li.order-list__item(
        @click="showFunction",
        v-for="(option, index) in options",
        :key="index"
      ) {{ option }}
</template>

<style lang="scss" scoped>
@import "../assets/_varaibles.scss";

div {
  position: relative;
  label {
    margin-right: 20rem;
    color: $text-color;

    &::selection {
      user-select: none;
    }
  }

  .order-list {
    display: inline-block;
    position: absolute;
    top: 0.5rem;
    left: 0;
    border: 1px solid #484848;
    border-radius: 0.25rem;
    background-color: #fff;
    z-index: 3;
    &__item {
      padding: 0.5rem 1rem;

      &::selection {
        user-select: none;
      }

      &:hover {
        background-color: #c4c4c4;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
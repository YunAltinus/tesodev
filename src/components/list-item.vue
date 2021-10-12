<script>
export default {
  props: ["record"],
};
</script>
<template lang="pug">
li.list-item
  .list-item__info 
    .list-item__info__content {{ record.Country }} - {{ record.City }}
    .list-item__info__date {{ record.NameSurname }} - {{ record.Date.split('/')[2] }}

  .email {{ record.Email }}
</template>

<style lang="scss">
@import "../assets/_varaibles.scss";
@import "../assets/_mixin.scss";
.list-item {
  padding-bottom: 4rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #c4c4c4;
    cursor: pointer;

    .list-item__info__date {
      color: #fff;
    }
  }

  &__info {
    &__content {
      line-height: 1.2rem;
    }

    &__date {
      font-size: 12px;
      line-height: 1.2rem;
      color: $text-color-sm;
    }
  }
}
</style>
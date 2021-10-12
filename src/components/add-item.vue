<script>
</script>

<template lang="pug">
router-link.btn.add-item(:to="{ path: '/add-new-record' }") Add new record
</template>

<style lang="scss">
@import "../assets/_mixin.scss";

.add-item {
  display: inline-block;
  padding: 0.5rem 1rem;
  @include border;
}
</style>
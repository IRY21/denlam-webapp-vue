<template>
  <div class="Form-Row Flex">
      <span class="Text">{{ product.title }}</span>
      <div class="Btn Btn_theme_delete">Удалить</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .ProductWrap .Btn_theme_delete {
    margin-left: 20px; }
</style>

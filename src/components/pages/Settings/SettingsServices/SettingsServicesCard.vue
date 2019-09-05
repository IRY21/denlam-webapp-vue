<template>
  <div class="Form-Row Flex">
      <span class="Text">{{ product.title }}</span>
      <div 
        class="Btn Btn_theme_delete"
        @click="deleteService"
      >
        Удалить
      </div>
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
  },
  methods: {
    deleteService() {
      this.okoModal_confirm()
        .then(() => {
          this.$store.dispatch('products/deleteProduct', {id: this.product.id})
            .then(() => {
              this.okoModal_response({ type: 'success', 
                                      message: 'Услуга успешно удалена'});
            })
            .catch((err) => {
              this.okoModal_response({type:'error', message: err});  
            })
        })      
    }
  }
}
</script>

<style scoped lang="scss">
  .ProductWrap .Btn_theme_delete {
    margin-left: 20px; }
</style>

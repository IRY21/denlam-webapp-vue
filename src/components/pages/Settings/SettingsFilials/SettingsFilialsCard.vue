<template>
  <div class="Form-Row Flex">
      <span class="Text">{{ filial.title }}</span>
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
    filial: {
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
          this.$store.dispatch('filials/deleteFilial', {id: this.filial.id})
            .then(() => {
              this.okoModal_response({ type: 'success', 
                                      message: 'Филиал успешно удален'});
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

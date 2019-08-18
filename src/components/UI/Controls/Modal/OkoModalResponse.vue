<template>
  <div 
    class="OkoModal"
    :class="modalClass"
  >
    <h1 class="OkoModal-Title">{{ formType[type].title }}</h1>
    <p class="OkoModal-Message">
      {{ message }}
    </p>
    <button 
      class="OkoModal-Btn Btn"
      :class="formType[type].btnClass"
      @click="$emit('close')"
    >
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  name: 'OkoModalResponse',
  props: {
    type: {
      require: true,
      type: String,
      validator: function (value) {
        // Значение должно соответствовать одной из этих строк
        return ['error', 'success'].indexOf(value) !== -1
      }
    },
    message: {
      require: true,
      type: String
    }
  },
  data() {
    return {
      modalClass: `OkoModal_${this.type}`,
      formType: {
        error: {
          title: 'Ошибка!',
          btnClass: 'Btn_theme_red',
        },
        success: {
          title: 'Успешно!',
          btnClass: 'Btn_theme_green',
        }
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.OkoModal {
  max-width: 300px;
  padding: 20px;
  &-Title{
    margin-bottom: 20px;
    font-size: 30px;
    text-align: center;}
  &-Message{
    margin-bottom: 20px;
    font-size: 15px;
    text-align: center;}
  &-Btn{
    width: 170px;
    height: 45px;
    margin: 0 auto;}}

.OkoModal_error {
  .OkoModal{
    &-Title{
      color: tomato;
    }
  }
}

.OkoModal_success {
  .OkoModal{
    &-Title{
      color: green;
    }
  }
}
</style>

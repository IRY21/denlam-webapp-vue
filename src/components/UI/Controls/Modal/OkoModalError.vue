<template>
  <div class="OkoModal">
    <h1 class="OkoModal-Title">Ошибка!</h1>
    <p class="OkoModal-Message">
      {{ message }}
    </p>
    <button 
      class="OkoModal-Btn Btn Btn_theme_red"
      @click="$emit('close')"
    >
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  name: 'OkoModalError',
  props: ['message']
}
</script>

<style scoped lang="scss">
.OkoModal {
  max-width: 300px;
  padding: 20px;
  &-Title{
    margin-bottom: 20px;
    font-size: 30px;
    color: tomato;
    text-align: center;}
  &-Message{
    margin-bottom: 20px;
    font-size: 15px;
    text-align: center;}
  &-Btn{
    width: 170px;
    height: 45px;
    margin: 0 auto;}}
</style>

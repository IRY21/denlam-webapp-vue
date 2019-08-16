<template>
  <vc-modal 
    name="vcm-success"
    width="300"
    height="auto"
  >
    <div class="OkoModal">
      <h1 class="OkoModal-Title">Ok!</h1>
      <p class="OkoModal-Message">
        {{ message }}
      </p>
      <button 
        class="OkoModal-Btn Btn Btn_theme_green"
        @click="$emit('close')"
      >
        Закрыть
      </button>
    </div>
  </vc-modal>
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
    color: green;
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

<template>
  <div 
    class="OkoModalConfirm"
  >
    <h1 class="OkoModalConfirm-Title">Подтвердить действие?</h1>
    <div class="OkoModalConfirm-ControlsWrap">
      <button 
        class="OkoModalConfirm-Btn Btn Btn_theme_green"
        @click="confirmHandler"
      >
        Подтвердить
      </button>
      <button 
        class="OkoModalConfirm-Btn Btn Btn_theme_red"
        @click="rejectHandler"
      >
        Отменить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OkoMadalConfirm',
  props: {
    resolve: {
      require: true,
      type: Function
    },
    reject: {
      require: true,
      type: Function
    }
  },
  methods: {
    confirmHandler() {
      this.$emit('close');
      return this.resolve();
    },
    rejectHandler() {
      this.$emit('close');
      return this.reject();
    }
  }
}
</script>

<style scoped lang="scss">
.OkoModalConfirm {
  width: 100%;
  padding: 20px;
  &-Title{
    margin-bottom: 20px;
    font-size: 23px;
    text-align: center;}
  &-Message{
    margin-bottom: 20px;
    font-size: 15px;
    text-align: center;}
  &-Btn{
    width: 120px;
    height: 45px;}
  &-ControlsWrap{
    display: flex;
    justify-content: space-between;
  }}
</style>

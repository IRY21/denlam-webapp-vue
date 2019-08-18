<template>
  <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_add-product">
    <form class="Form">
        <div class="Form-Row">
            <h3 class="Heading_lvl3">Добавить продукт</h3>
        </div>
        <div class="Form-Row">
            <label class="Input Input_bgWhite">
                <span class="Label">Виберите проект</span>
                <input type="text" class="Input-Control" placeholder="Название продукта">
            </label>
        </div>
        <div class="Form-Row Form-Row_btnWrap">
            <div class="Btn Btn_theme_green Btn_size_m">Добавить</div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  .Card_add-product {
    max-width: 360px;
    padding: 15px 90px 20px 20px; }
    .Card_add-product .Heading_lvl3 {
      margin-bottom: 10px; }
</style>

<template>
  <div>
    <div class="MainSection-Row MainSection-Row_title-lvl2">
        <h1 class="Heading_lvl2">
            Продукты
        </h1>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
        <div class="ProductWrap">
            <div class="Form-Row Flex">
                <span class="Text">РНИ</span>
                <div class="Btn Btn_theme_delete">Удалить</div>
            </div>
            <div class="Form-Row Flex">
                <span class="Text">Энергоаудит</span>
                <div class="Btn Btn_theme_delete">Удалить</div>
            </div>
            <div class="Form-Row Flex">
                <span class="Text">ЭТЛ</span>
                <div class="Btn Btn_theme_delete">Удалить</div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_add-product">
            <form action="" class="Form">
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Card_add-product {
  max-width: 360px;
  padding: 15px 90px 20px 20px; }
  .Card_add-product .Heading_lvl3 {
    margin-bottom: 10px; }
    
.ProductWrap .Btn_theme_delete {
  margin-left: 20px; }
</style>
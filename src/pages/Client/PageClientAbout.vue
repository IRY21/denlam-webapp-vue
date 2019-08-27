<template>
  <div>
    <div class="MainSection-Row MainSection-Row_size_add">
      <div class="Form-Row Form-Row_col2">
          <div class="Form-Column">
              <div class="Input">
                  <p class="Label">Наименование организации или ФИО</p>
                  <div class="Input-Text">ЖК «Ясная поляна»</div>
              </div>
          </div>
          <div class="Form-Column">
              <div class="Input">
                  <p class="Label">ИНН организации или физ. лица</p>
                  <div class="Input-Text">024203222908</div>
              </div>
          </div>
      </div>
      <div class="Form-Row Form-Row_col2">
          <div class="Form-Column">
              <div class="Input">
                  <p class="Label">Город</p>
                  <div class="Input-Text">Уфа</div>
              </div>
          </div>
          <div class="Form-Column">
              <div class="Input">
                  <p class="Label">Полный адрес (если имеется)</p>
                  <div class="Input-Text">г. Уфа, ул. Ленина, д. 14</div>
              </div>
          </div>
      </div>
      <div class="Form-Row Form-Row_col2">
          <div class="Form-Column">
              <div class="Input">
                  <p class="Label">Телефоны</p>
                  <div class="Input-Text">8 (999) 999-99-99</div>
                  <div class="Input-Text">8 (999) 999-99-99</div>
              </div>
          </div>
          <div class="Form-Column">
              <div class="Input">
                  <p class="Label">Email</p>
                  <div class="Input-Text">ivanov@mail.ru</div>
                  <div class="Input-Text">ivanov@mail.ru</div>
              </div>
          </div>
      </div>
  </div>
  <div class="MainSection-Row">
      <div class="Line"></div>
  </div>
  <div class="MainSection-Row MainSection-Row_title-lvl2">
      <h2 class="Heading_lvl2 Color_black">Контактные лица</h2>
  </div>
  <div class="MainSection-Row MainSection-Row_noTopPadding">
      <div class="Card Card_bd Card_bd_color_green Card_contact">
          <h3 class="Heading_lvl2">Иванов Петр Семенович</h3>
          <p class="Subheading">Менеджер по продажам</p>
          <div class="Form-Row">
              <div class="Form-Column">
                  <div class="Input">
                      <p class="Label">Телефоны</p>
                      <div class="Input-Text">8 (999) 999-99-99</div>
                      <div class="Input-Text">8 (999) 999-99-99</div>
                  </div>
              </div>
          </div>
          <div class="Form-Row">
              <div class="Form-Column">
                  <div class="Input">
                      <p class="Label">Email</p>
                      <div class="Input-Text">ivanov@mail.ru</div>
                      <div class="Input-Text">ivanov@mail.ru</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.MainSection-Row_title {
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px; }

.MainSection-Row_size_add {
  max-width: 650px; }

.Form-Row .Form-Row {
  margin-bottom: 5px; }
  .Form-Row .Form-Row:last-of-type {
    margin-bottom: 0; }

.Input-Text:nth-of-type(2) {
  padding-top: 0; }

.Heading_lvl2.Color_black {
  color: #000000; }

.Card_contact {
  width: 300px; }
  .Card_contact .Heading_lvl2 {
    margin-bottom: 0; }
  .Card_contact .Subheading {
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #b7b7b7; }
</style>

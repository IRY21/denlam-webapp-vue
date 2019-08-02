<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <div class="Flex Flex_align_center">
            <h1 class="Heading_lvl1">
                Сотрудники
            </h1>
            <router-link
              class="Btn Btn_theme_green Btn_type_add"
              :to="{name: 'PageWorkersAdd'}"
            >
                Добавить сотрудника
            </router-link>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Filter">
            <p class="Filter-Title">Фильтр</p>
            <div class="Filter-Column">
                <div class="Select Select_theme_arrow">
                    <p class="Label">Город</p>
                    <select name="" id="" class="Select-Control">
                        <option value="0">Все города</option>
                    </select>
                </div>
            </div>
            <div class="Filter-Column">
                <div class="Select Select_theme_arrow">
                    <p class="Label">Тип сотрудника</p>
                    <select name="" id="" class="Select-Control">
                        <option value="0">Все типы сотрудников</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Table Table_workers">
            <div class="Table-Row Table-Row_head">
                <div class="Table-Column">
                    <p class="Table-Text">

                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        ФИО и тип
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Город
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Контакты
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Дополнительная информация
                    </p>
                </div>
            </div>
            <router-link
              class="Table-Row Link"
              :to="'/worker/1'"
            >
                <div class="Table-Column">
                    <div class="Avatar Avatar_small">
                        <img src="/img/workers/avatar/no.jpg" alt="" class="Avatar-Img">
                    </div>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Иванов<br>
                        Петросян Самойлович<br>
                        <span style="color: #008acc;">Фрилансер</span>
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Уфа
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        8 (960) 999-99-99
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text" style="color: #898989;">
                        Наличие приборов:<br>
                        Возможность выезда:<br>
                        Опыт работы до 1000Вт:<br>
                        Опыт работы свыше 1000Вт:
                    </p>
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Table_workers .Table-Row.Link {
  text-decoration: none; }
  .Table_workers .Table-Row.Link:hover {
    background-color: #f6f6f6; }

.Table_workers .Table-Row_head {
  margin-bottom: 5px; }

.Table_workers .Table-Column:nth-of-type(1) {
  width: 80px; }

.Table_workers .Table-Column:nth-of-type(2) {
  width: 30%; }

.Table_workers .Table-Column:nth-of-type(3) {
  width: 15%; }

.Table_workers .Table-Column:nth-of-type(4) {
  width: 15%; }

.Table_workers .Table-Column:nth-of-type(5) {
  width: 25%; }
</style>

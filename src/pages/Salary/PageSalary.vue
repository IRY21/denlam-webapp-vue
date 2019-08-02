<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <h1 class="Heading_lvl1">
            Зарплаты
        </h1>
    </div>
    <div class="MainSection-Row">
        <div class="Form-Row">
            <div class="Filter">
                <p class="Filter-Title">Фильтр</p>
                <div class="Filter-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Филиал</p>
                        <select name="worker_id" id="worker_id" class="Select-Control">
                            <option value="0">Все филиалы</option>
                            <option value="2">Москва</option>
                            <option value="1">Уфа</option>
                        </select>
                    </div>
                </div>
                <div class="Filter-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Сотрудник</p>
                        <select name="worker_id" id="worker_id" class="Select-Control">
                            <option value="0">Все сотрудники</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="Form-Row">
            <div class="Filter">
                <p class="Filter-Title" style="visibility: hidden;">Фильтр</p>
                <div class="Filter-Column">
                    <div class="Input">
                        <p class="Label">Начало периода</p>
                        <input type="text"
                                value="Январь 2019"
                                class="Input-Control datepicker-here"
                                data-min-view="months"
                                data-view="months"
                                data-date-format="MM yyyy" />
                    </div>
                </div>
                <div class="Filter-Column">
                    <div class="Input">
                        <p class="Label">Конец периода</p>
                        <input type="text"
                                value="Февраль 2019"
                                class="Input-Control datepicker-here"
                                data-min-view="months"
                                data-view="months"
                                data-date-format="MM yyyy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_salary">
            <div class="Table">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Период
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Сотрудник
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Сумма
                        </p>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Январь 2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <router-link
                              class="Link Link_no-decoration"
                              :to="'/worker/1'"
                            >
                                Б1 (Штатный сотрудник)
                            </router-link>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            50 000 руб.
                        </p>
                    </div>
                </div>
                
                <div class="Table-Row Table-Row_total">
                    <div class="Flex Flex_justify_end" style="width: 100%;">
                        <p style="font-size: 16px;font-weight: 500;">Итого 108 000 руб.</p>
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
.Card_salary {
  max-width: 720px; }
  .Card_salary .Table-Row_head {
    margin-bottom: 5px; }
  .Card_salary .Table-Column:nth-of-type(1) {
    width: 20%; }
  .Card_salary .Table-Column:nth-of-type(2) {
    width: 65%; }
  .Card_salary .Table-Column:nth-of-type(3) {
    width: 15%; }
  .Card_salary .Table-Row_total {
    padding-top: 15px; }
</style>

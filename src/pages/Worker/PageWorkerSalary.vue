<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <router-link
          class="Link Link_back"
          :to="{name: 'PageWorker'}"
        >
            Сотрудник
        </router-link>
        <h1 class="Heading_lvl1">
            Подробный расчет
        </h1>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2">Елисеев Арсений Сергеевич</h2>
    </div>
    <div class="MainSection-Row">
        <div class="Filter">
            <p class="Filter-Title">Фильтр</p>
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
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Card Card_bgGray Card_salary-in">
            <div class="Table Table">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Название проекта/выплаты
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Сумма
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Комментарий
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">

                        </p>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Выплата<br>
                            <span>(10 янв 2019 в 19:48)</span>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <div class="Input Input_theme_ruble Input_bgWhite Input_js_sumColor">
                            <div class="Input-Wrap">
                                <input
                                    data-id="103"
                                    id="fact_sum103"
                                    type="number"
                                    step="0.01"
                                    value="-38500.00"
                                    class="Input-Control"/>
                            </div>
                        </div>
                    </div>
                    <div class="Table-Column">
                        <div class="Table-ControlRow">
                            <div class="Select Select_theme_arrow Select_bgWhite">
                                <select name="project_id" id="project_id" class="Select-Control">
                                    <option value="0">ЗП на руки</option>
                                    <option value="0">На карту</option>
                                </select>
                            </div>
                        </div>
                        <div class="Table-ControlRow">
                            <textarea name="" id="" cols="30" rows="10" class="Textarea Textarea_theme_white">На карту</textarea>
                        </div>
                    </div>
                    <div class="Table-Column">
                        <div class="Table-ControlRow">
                            <div class="Btn Btn_theme_green Table-ControlEl">Сохранить</div>
                        </div>
                        <div class="Table-ControlRow">
                            <div class="Btn Btn_theme_red Table-ControlEl">Удалить</div>
                        </div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Кафе "Гастролёры"<br>
                            <span>(10 янв 2019 в 19:47)</span>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <div class="Input Input_theme_ruble Input_bgWhite Input_js_sumColor">
                            <div class="Input-Wrap">
                                <input
                                    data-id="103"
                                    id="fact_sum103"
                                    type="number"
                                    step="0.01"
                                    value="50000.00"
                                    class="Input-Control"/>
                            </div>
                        </div>
                    </div>
                    <div class="Table-Column">
                        <textarea name="" id="" cols="30" rows="10" class="Textarea Textarea_theme_white">Запланирован выезд 25 марта нужно взять с собой еще что-то</textarea>
                    </div>
                    <div class="Table-Column">
                        <div class="Table-ControlRow">
                            <div class="Btn Btn_theme_green Table-ControlEl">Сохранить</div>
                        </div>
                        <div class="Table-ControlRow">
                            <div class="Btn Btn_theme_red Table-ControlEl">Удалить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_size_half Card_salary-add">
            <form action="" class="Form">
                <div class="Form-Row">
                    <div class="Text" style="line-height: 1.2;">
                        Баланс сотрудника:<br>
                        11 500,00 руб.
                    </div>
                </div>
                <div class="Form-Row">
                    <h3 class="Heading_lvl3">Добавить выплату из баланса</h3>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Select Select_theme_arrow Select_bgWhite">
                            <p class="Label">Сотрудник</p>
                            <select name="project_id" id="project_id" class="Select-Control">
                                <option value="0">Выберите сотрудника</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Input Input_theme_ruble Input_bgWhite">
                            <p class="Label">Сумма</p>
                            <div class="Input-Wrap">
                                <input
                                    id=""
                                    type="number"
                                    step="0.01"
                                    value="0"
                                    class="Input-Control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Select Select_theme_arrow Select_bgWhite">
                            <p class="Label">Тип расхода</p>
                            <select name="project_id" id="project_id" class="Select-Control">
                                <option value="0">ЗП на руки</option>
                                <option value="0">На карту</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <p class="Label">Комментарий</p>
                    <textarea name=""
                              id=""
                              cols="30"
                              rows="10"
                              class="Textarea Textarea_theme_white"
                              placeholder="Текст..."></textarea>
                </div>
                <div class="Form-Row Form-Row_btnWrap">
                    <div class="Btn Btn_theme_green Btn_size_m">Добавить выплату</div>
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
.Card_salary-in .Table-Row_head {
  margin-bottom: 5px; }

.Card_salary-in .Table-Column:nth-of-type(1) {
  width: 35%; }

.Card_salary-in .Table-Column:nth-of-type(2) {
  width: 25%; }

.Card_salary-in .Table-Column:nth-of-type(3) {
  width: 25%; }

.Card_salary-in .Table-Column:nth-of-type(4) {
  width: 15%; }

.Card_salary-in .Table .Textarea {
  width: 100%;
  max-height: 63px;
  min-height: 63px;
  padding-top: 5px;
  padding-left: 7px; }

.Card_salary-in .Table .Table-Text span {
  font-size: 13px;
  color: #898989; }

.Card_salary-add {
  padding: 20px 30px 20px 20px; }
  .Card_salary-add .Textarea {
    width: 100%;
    height: 98px;
    max-height: 98px;
    min-height: 98px; }
</style>

<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <h1 class="Heading_lvl1">
          Планы
      </h1>
    </div>
    <div class="MainSection-Row">
        <div class="Filter">
            <p class="Filter-Title">Поиск</p>
            <div class="Filter-Column">
                <div class="Select Select_theme_arrow">
                    <select name="filial_id" id="filial_id" class="Select-Control">
                        <option value="0">Все филиалы</option>
                        <option value="2">Москва</option>
                        <option value="1">Уфа</option>
                    </select>
                </div>
            </div>
            <div class="Filter-Column">
                <div class="Input">
                    <input type="text"
                            value="Февраль 2019"
                            class="Input-Control datepicker-here"
                            data-min-view="months"
                            data-view="months"
                            data-date-format="MM yyyy" />
                </div>
            </div>
            <div class="Filter-Column">
                <div class="Btn Btn_theme_grey Btn_theme_excell saveExcellbut">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#excel"
                            href="/img/sprite.svg#excel"></use>
                    </svg>
                    Выгрузить в Excell
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Card Card_bgGray">
            <div class="Table Table_search-result">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Дата начала
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Наименование проекта
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Бюджет
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Факт. закрытие
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Примечание
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
                            25.05.2018
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="projects/about" class="hrefelem Link Link_no-decoration">Adidas</a>
                            <br>
                            <span style="color: #e08b26;">Исполнитель выбран</span>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <div class="Table-Text">146 000 руб.</div>
                    </div>
                    <div class="Table-Column">
                        <div class="Input Input_theme_ruble Input_bgWhite">
                            <div class="Input-Wrap">
                                <input
                                    data-id="103"
                                    id="fact_sum103"
                                    type="number"
                                    step="0.01"
                                    value="0"
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
                            <div class="Btn Btn_theme_blue Table-ControlEl">Перенести</div>
                        </div>
                        <div class="Table-ControlRow">
                            <div class="Btn Btn_theme_red Table-ControlEl">Удалить</div>
                        </div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            25.05.2018
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="projects/about" class="hrefelem Link Link_no-decoration">Adidas</a>
                            <br>
                            <span style="color: #e08b26;">Исполнитель выбран</span>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <div class="Table-Text">146 000 руб.</div>
                    </div>
                    <div class="Table-Column">
                        <div class="Input Input_theme_ruble Input_bgWhite">
                            <div class="Input-Wrap">
                                <input
                                    data-id="103"
                                    id="fact_sum103"
                                    type="number"
                                    step="0.01"
                                    value="0"
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
                            <div class="Btn Btn_theme_blue Table-ControlEl">Перенести</div>
                        </div>
                        <div class="Table-ControlRow">
                            <div class="Btn Btn_theme_red Table-ControlEl">Удалить</div>
                        </div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div>
                        <p class="Table-Text">
                            Итого по плану: 1 445 000 руб.
                        </p>
                        <p class="Table-Text">
                            Итого факт. закрыто: 0 руб.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_size_half">
            <form action="" class="Form">
                <div class="Form-Row">
                    <h3 class="Heading_lvl3">Добавить в план</h3>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Select Select_theme_arrow Select_bgWhite">
                            <p class="Label">Виберите проект</p>
                            <select name="project_id" id="project_id" class="Select-Control">
                                <option value="39">Adidas</option>
                                <option value="40">KFC</option>
                                <option value="23">Агрохолдинг им. Дзержинского</option>
                                <option value="26">АН "Перспектива"</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Input Input_bgWhite">
                            <p class="Label">Планируемый  месяц</p>
                            <input type="text"
                                    value="Февраль 2019"
                                    class="Input-Control datepicker-here"
                                    data-min-view="months"
                                    data-view="months"
                                    data-date-format="MM yyyy"
                                    data-position='right bottom'/>
                        </div>
                    </div>
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
.Table .Table-Column:nth-of-type(1) {
  width: 10%; }

.Table .Table-Column:nth-of-type(2) {
  width: 25%; }

.Table .Table-Column:nth-of-type(3) {
  width: 15%; }

.Table .Table-Column:nth-of-type(4) {
  width: 15%; }

.Table .Table-Column:nth-of-type(5) {
  width: 25%; }

.Table .Table-Column:nth-of-type(6) {
  width: 10%; }

.Table .Textarea {
  width: 100%;
  max-height: 93px;
  min-height: 93px; }

.Table-ControlRow {
  margin-bottom: 3px; }
</style>

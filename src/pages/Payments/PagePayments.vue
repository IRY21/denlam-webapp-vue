<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <div class="Flex Flex_align_center">
            <h1 class="Heading_lvl1">
                Оплаты
            </h1>
            <div 
              class="Btn Btn_theme_green Btn_type_add"
            >
                Добавить оплату
            </div>
        </div>
    </div>

    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_new-akt" >
            <h2 class="Heading_lvl2">Новая оплата</h2>
            <div class="Card Card_bgWhite Card_bd Card_bd_color_green">
                <form action="" class="Form">
                    <div class="Form-Row">
                        <div class="Select Select_theme_arrow">
                            <p class="Label">Филиал</p>
                            <select name="filial_id" id="filial_id" class="Select-Control">
                                <option value="Уфа" selected="">Уфа</option>
                                <option value="Москва">Москва</option>
                            </select>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Select Select_theme_arrow">
                            <p class="Label">Контрагент</p>
                            <select name="filial_id" id="filial_id" class="Select-Control">
                                <option value="0">ООО «Третий трест»</option>
                                <option value="1">ЖК «Ясная поляна»</option>
                                <option value="2">ЖК «Новоселов»</option>
                            </select>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Select Select_theme_arrow">
                            <p class="Label">По проекту (договору)</p>
                            <select name="filial_id" id="filial_id" class="Select-Control">
                                <option value="0">Третий трест 2019</option>
                                <option value="0">Третий трест 2019</option>
                                <option value="0">Третий трест 2019</option>
                            </select>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <p class="Label">Дата акта</p>
                            <input type="text"
                                    value=""
                                    class="Input-Control datepicker-here"
                            />
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_theme_ruble">
                            <p class="Label">Сумма</p>
                            <div class="Input-Wrap">
                                <input
                                    name="summa"
                                    id="summa"
                                    type="number"
                                    step="0.01"
                                    data-maxsumma="126524.87"
                                    value="0"
                                    class="Input-Control"/>
                                <input type="hidden" class="project_id" value="60">
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <label class="File File_theme_link File_size_default">
                            <p class="Label">Подтверждающий документ</p>
                            <input type="file" class="File-Control">
                            <div class="File-Link">Прикрепить файл</div>
                        </label>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <div class="Btn Btn_theme_green Btn_size_m">Добавить оплату</div>
                    </div>
                    <div class="Form-Row">
                        <div class="Btn Btn_theme_delete Btn_js_toggleEl" data-pointer="shownEl">Скрыть форму</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--<div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
        <div class="Line"></div>
    </div>-->
    <div class="MainSection-Row">
        <div class="Filter">
            <p class="Filter-Title">Фильтр</p>
            <div class="Filter-Column">
                <div class="Select Select_theme_arrow">
                    <p class="Label">По филиалу</p>
                    <select name="worker_id" id="worker_id" class="Select-Control">
                        <option value="0">Все филиалы</option>
                        <option value="2">Москва</option>
                        <option value="1">Уфа</option>
                    </select>
                </div>
            </div>
            <div class="Filter-Column">
                <div class="Select Select_theme_arrow">
                    <p class="Label">По контрагенту</p>
                    <select name="worker_id" id="worker_id" class="Select-Control">
                        <option value="0">Все контрагенты</option>
                        <option value="2">ЖК «Новоселов»</option>
                        <option value="1">ЖК «Июнь»</option>
                    </select>
                </div>
            </div>
            <div class="Filter-Column">
                <div class="Input">
                    <p class="Label">За период</p>
                    <input type="text"
                            value="01.01.2019 - 31.01.2019"
                            data-range="true"
                            data-multiple-dates-separator=" - "
                            class="Input-Control datepicker-here ControlEl"
                            data-position="left top">
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Card Card_bgGray">
            <div class="Table Table_payment">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Дата оплаты
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Контрагент
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Проект (договор)
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Сумма
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">

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
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">ЖК «Новоселов»</a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Новоселов Фест
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">ЖК «Новоселов»</a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Новоселов Фест
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">

                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">ЖК «Новоселов»</a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Новоселов Фест
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">ЖК «Новоселов»</a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Новоселов Фест
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">

                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">ЖК «Новоселов»</a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Новоселов Фест
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">ЖК «Новоселов»</a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Новоселов Фест
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/kontragents/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">

                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
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
.MainSection-Row_title .Btn_type_add {
  margin-left: 30px; }

.Card_new-akt {
  max-width: 360px;
  padding: 20px 30px 30px; }
  .Card_new-akt .Heading_lvl2 {
    margin-bottom: 20px; }
  .Card_new-akt .Card_bd_color_green {
    padding: 15px 20px 20px; }

.Filter-Column {
  width: 250px; }

.Table_payment .Table-Row_head {
  margin-bottom: 5px; }

.Table_payment .Table-Column:nth-of-type(1) {
  width: 15%; }

.Table_payment .Table-Column:nth-of-type(2) {
  width: 20%; }

.Table_payment .Table-Column:nth-of-type(3) {
  width: 25%; }

.Table_payment .Table-Column:nth-of-type(4) {
  width: 13%; }

.Table_payment .Table-Column:nth-of-type(5) {
  width: 22%; }

.Table_payment .Table-Column:nth-of-type(6) {
  width: 5%; }
</style>

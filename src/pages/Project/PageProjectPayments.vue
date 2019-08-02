<template>
  <div>
    <div class="MainSection-Row MainSection-Row_noBottomPadding MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2">Оплаты</h2>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_payment">
            <h2 class="Heading_lvl2">Новая оплата</h2>
            <div class="Card Card_bgWhite Card_bd Card_bd_color_green">
                <form action="" class="Form">
                    <div class="Form-Row">
                        <div class="Input">
                            <p class="Label">Дата оплаты</p>
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
                </form>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd_dashed Card_size_half">
            <div class="Table Table_project-payment">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Дата оплаты
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
                            03.01.2017
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
                            03.01.2017
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
                            03.01.2017
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
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.Card_payment {
  max-width: 360px;
  padding: 20px 30px 30px; }
  .Card_payment .Heading_lvl2 {
    margin-bottom: 20px;
    color: #000000; }
  .Card_payment .Card_bd_color_green {
    padding: 15px 20px 20px; }

.Table_project-payment .Table-Column:nth-of-type(1) {
  width: 25%; }

.Table_project-payment .Table-Column:nth-of-type(2) {
  width: 25%; }

.Table_project-payment .Table-Column:nth-of-type(3) {
  width: 30%; }

.Table_project-payment .Table-Column:nth-of-type(4) {
  width: 20%; }
</style>

<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <router-link
          class="Link Link_back"
          :to="{name: 'PageWorkers'}"
        >
            Сотрудники
        </router-link>
        <h1 class="Heading_lvl1">
            Анисимов Натан Борисович
        </h1>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Avatar">
            <img src="/img/workers/avatar/no.jpg" alt="" class="Avatar-Img">
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <router-link
          class="Link Color_blue"
          :to="{name: 'PageWorkerSalary', params: { workerId: '1'}}"
        >
          Расчет зарплаты и авансирование
        </router-link>
    </div>
    <div class="MainSection-Row MainSection-Row_size_add">
        <form action="" class="Form Form_workers">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">ФИО</p>
                        <input type="text"
                                value="Анисимов Натан Борисович"
                                class="Input-Control"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Тип сотрудника</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Штатный сотрудник</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Логин для входа</p>
                        <input type="text"
                                value="asainov123"
                                class="Input-Control"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Пароль для входа</p>
                        <input type="text"
                                value=""
                                class="Input-Control"
                                placeholder="Введите для изменения"
                        />
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Город проживания</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Уфа</option>
                        </select>
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Филиал (виден только "для своих")</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Уфа</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Телефон</p>
                        <input type="text"
                                value="8 (999) 999-99-99"
                                class="Input-Control MaskedPhone"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Телефон</p>
                        <input type="text"
                                value=""
                                class="Input-Control MaskedPhone"
                                placeholder="8 (___) ___-__-__"
                        />
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Телефон</p>
                        <input type="text"
                                value=""
                                class="Input-Control MaskedPhone"
                                placeholder="8 (___) ___-__-__"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Email</p>
                        <input type="email"
                                value=""
                                class="Input-Control MaskedPhone"
                                placeholder=""
                        />
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input Input_theme_ruble">
                        <p class="Label">Оклад</p>
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
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Возможность командировок</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Боле 300 км</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_btnWrap">
                <div class="Table-ControlRow">
                    <div class="Btn Btn_theme_green Btn_size_m">Сохранить</div>
                </div>
                <div class="Table-ControlRow">
                    <div class="Btn Btn_theme_red Btn_size_m">Удалить</div>
                </div>
            </div>
        </form>
    </div>
    <div class="MainSection-Row">
        <div class="Line"></div>
    </div>
    <div class="MainSection-Row MainSection-Row_title-lvl2 MainSection-Row_noBottomPadding">
        <h2 class="Heading_lvl2">Документы</h2>
    </div>
    <!--
        scan.svg
        excel-file.svg
        word.svg
        rar.svg
        ps.svg
        pdf.svg
        zip.svg
        power-point.svg
    -->
    <div class="MainSection-Row">
        <div class="Label Label_doc">Файлы</div>
        <div class="Docs-Wrap Flex">
            <a href="/files/" class="Link Link_theme_doc Link_theme_no-doc" target="_blank">
                <img src="/img/scan.svg" alt="" class="Icon">
                нет файлов...
            </a>
        </div>
        <form enctype="multipart/form-data" class="fileform" id="fileform1" name="fileform60" method="POST" action="/projects/documents/60?action=add_file">
            <input type="hidden" name="projectid" id="projectid" value="60">
            <input type="hidden" name="type_id" id="type_id" value="1">
            <label class="File File_theme_link">
                <input type="file" name="photo" multiple="" class="File-Control" id="fileinput1" data-id="1" accept=".txt,image/*, .pdf, .docx, .doc, .xlsx, .xls, .pdf, .7z, .rar, .zip" >
                <div class="Btn Btn_theme_green Btn_size_m File-State_ok" id="addfile_btn1" data-id="1">Добавить</div>
            </label>
        </form>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2">Связанные проекты</h2>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_noBottomPadding MainSection-Row_title_no-mrg">
        <h3 class="Heading_lvl3 Color_black">Текущие</h3>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey">
        <div class="Table Table_workers-in">
            <div class="Table-Row Table-Row_head">
                <div class="Table-Column">
                    <p class="Table-Text">
                        Название проекта
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Плановые даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Фактические даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Бюджет
                    </p>
                </div>
            </div>
            <div class="Table-Row">
                <div class="Table-Column">
                    <p class="Table-Text">
                        <router-link
                          class="Link Link_no-decoration"
                          :to="'/project/1/about'"
                        >
                            KFC
                        </router-link>
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        04.06.2018 - 30.07.2019
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        17.10.2018 - неизвестно
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        564 000 руб.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_noBottomPadding MainSection-Row_title_no-mrg">
        <h3 class="Heading_lvl3 Color_black">Предыдущие</h3>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey">
        <div class="Table Table_workers-in">
            <div class="Table-Row Table-Row_head">
                <div class="Table-Column">
                    <p class="Table-Text">
                        Название проекта
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Плановые даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Фактические даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Бюджет
                    </p>
                </div>
            </div>
            <div class="Table-Row">
                <div class="Table-Column">
                    <p class="Table-Text">
                        <router-link href="/project/about" 
                          class="Link Link_no-decoration"
                          :to="'/project/1/about'"
                        >
                            БЦ «Прага»
                        </router-link>
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        04.06.2018 - 30.07.2019
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        21.07.2018 - 03.09.2018
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        61 190 руб.
                    </p>
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
.MainSection-Row_size_add {
  max-width: 650px; }

.Form_workers .Form-Row .Form-Row {
  margin-bottom: 5px; }
  .Form_workers .Form-Row .Form-Row:last-of-type {
    margin-bottom: 0; }

.Table_workers-in .Table-Row_head {
  margin-bottom: 5px; }

.Table_workers-in .Table-Column:nth-of-type(1) {
  width: 45%; }

.Table_workers-in .Table-Column:nth-of-type(2) {
  width: 20%; }

.Table_workers-in .Table-Column:nth-of-type(3) {
  width: 20%; }

.Table_workers-in .Table-Column:nth-of-type(4) {
  width: 15%; }
</style>

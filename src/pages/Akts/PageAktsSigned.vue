<template>
  <div>
    <div class="MainSection-Row">
      <h2 class="Heading_lvl2">Подписанные акты</h2>
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
          <div class="Table Table_akts-signed">
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
 .Filter-Column {
  width: 250px; }

 .Table_akts-signed .Table-Row_head {
  margin-bottom: 5px; }

 .Table_akts-signed .Table-Column:nth-of-type(1) {
  width: 15%; }

 .Table_akts-signed .Table-Column:nth-of-type(2) {
  width: 20%; }

 .Table_akts-signed .Table-Column:nth-of-type(3) {
  width: 25%; }

 .Table_akts-signed .Table-Column:nth-of-type(4) {
  width: 13%; }

 .Table_akts-signed .Table-Column:nth-of-type(5) {
  width: 22%; }

 .Table_akts-signed .Table-Column:nth-of-type(6) {
  width: 5%; }
</style>

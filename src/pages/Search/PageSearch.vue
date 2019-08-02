<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <h1 class="Heading_lvl1">
          Поиск по актам
      </h1>
      </div>
      <div class="MainSection-Row">
          <div class="Filter">
              <p class="Filter-Title">Поиск</p>
              <div class="Filter-Column">
                  <div class="Select Select_theme_arrow">
                      <select name="searchtype" id="searchtype" class="Select-Control">
                          <option value="projects">По проектам</option>
                          <option value="workers">По исполнителям</option>
                      </select>
                  </div>
              </div>
          </div>
      </div>
      <div class="MainSection-Row MainSection-Row_noTopPadding">
          <div class="Search">
              <div class="Input">
                  <p class="Label">Введите поисковый запрос</p>
                  <input type="text"
                          name="search"
                          id="search"
                          value=""
                          class="Input-Control"
                          placeholder="Введите поисковый запрос..."
                  />
              </div>
              <div class="Btn Btn_theme_blue">Найти</div>
          </div>
      </div>
      <div class="MainSection-Row">
          <div class="Table Table_search-result">
              <div class="Table-Row Table-Row_head">
                  <div class="Table-Column">
                      <p class="Table-Text">
                          Название проекта
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          Исполнители
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          Бюджет
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          Статус проекта
                      </p>
                  </div>
              </div>
              <div class="Table-Row">
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/projects/about" class="hrefelem Link Link_no-decoration">ООО "Аренда пляжа"</a><br>
                      </p>
                      <p class="Table-Text Table-Text_company">
                          Энергоаудит
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/employees/in" class="hrefelem Link Link_no-decoration">Зимин Альберт Эльдарович</a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <div class="Table-Text">49 087 руб.</div>
                  </div>
                  <div class="Table-Column">
                      <div class="Table-Text">Акт подписан</div>
                  </div>
              </div>
              <div class="Table-Row">
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/projects/about" class="hrefelem Link Link_no-decoration">ООО "Аренда пляжа"</a><br>
                      </p>
                      <p class="Table-Text Table-Text_company">
                          Энергоаудит
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/employees/in" class="hrefelem Link Link_no-decoration">Зимин Альберт Эльдарович</a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <div class="Table-Text">49 087 руб.</div>
                  </div>
                  <div class="Table-Column">
                      <div class="Table-Text">Акт подписан</div>
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
  width: 252px; }

.Table_search-result .Table-Row {
  padding: 9px 0; }

.Table_search-result .Table-Column:nth-of-type(1) {
  width: 30%; }

.Table_search-result .Table-Column:nth-of-type(2) {
  width: 30%; }

.Table_search-result .Table-Column:nth-of-type(3) {
  width: 20%; }

.Table_search-result .Table-Column:nth-of-type(4) {
  width: 20%; }

.Table_search-result .Table-Text {
  padding: 0; }
  .Table_search-result .Table-Text_company {
    font-weight: 400;
    color: #898989; }
</style>

<template>
  <div>
    <div class="MainSection-Row" v-show="aktFormShow">
      <div class="Card Card_bgGray Card_new-akt" >
          <h2 class="Heading_lvl2">Новый акт</h2>
          <div class="Card Card_bgWhite Card_bd Card_bd_color_green">
              <form action="" class="Form">
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
                      <OkoFile 
                        v-model="newAkt.file"
                        :size="'default'"
                        :label="'Подтверждающий документ'"
                        :btnText="'Прикрепить файл'"
                      />
                  </div>
                  <div class="Form-Row Form-Row_btnWrap">
                      <div 
                        class="Btn Btn_theme_green Btn_size_m"
                        @click="textFiles"
                      >
                        Добавить акт
                      </div>
                  </div>
                  <div class="Form-Row">
                      <div 
                        class="Btn Btn_theme_delete"
                        @click="toggleAktAddForm"
                      >
                        Скрыть форму
                    </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
  <!--<div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
      <div class="Line"></div>
  </div>-->
  <div class="MainSection-Row">
      <h2 class="Heading_lvl2">На подписании у клиента</h2>
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
      </div>
  </div>
  <div class="MainSection-Row MainSection-Row_noTopPadding">
      <div class="Card Card_bgGray">
          <div class="Table Table_akts-new">
              <div class="Table-Row Table-Row_head">
                  <div class="Table-Column">
                      <p class="Table-Text">
                          Дата
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
                      <OkoFile 
                        v-model="aktsArr.id1.file"
                        :btnText="'Прикрепить скан'"
                      />
                  </div>
                  <div class="Table-Column">
                      <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
                              ЖК «Ясная поляна»
                          </a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/projects/about" class="Link Link_no-decoration">
                              Иннополис
                          </a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          20 019 руб.
                      </p>
                  </div>
                  <div class="Table-Column">
                      <OkoFile 
                        v-model="aktsArr.id2.file"
                        :btnText="'Прикрепить скан'"
                      />
                  </div>
                  <div class="Table-Column">
                      <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
                              УК «КапиталСтройТехИ...
                          </a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/projects/about" class="Link Link_no-decoration">
                              Агрохолдинг им. Дзержинского
                          </a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          20 019 руб.
                      </p>
                  </div>
                  <div class="Table-Column">
                      <OkoFile 
                        v-model="aktsArr.id3.file"
                        :btnText="'Прикрепить скан'"
                      />
                  </div>
                  <div class="Table-Column">
                      <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
                              УК «КапиталСтройТехИ...
                          </a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          <a href="/projects/about" class="Link Link_no-decoration">
                              Люблино 23
                          </a>
                      </p>
                  </div>
                  <div class="Table-Column">
                      <p class="Table-Text">
                          20 019 руб.
                      </p>
                  </div>
                  <div class="Table-Column">
                      <OkoFile 
                        v-model="aktsArr.id4.file"
                        :btnText="'Прикрепить скан'"
                      />
                  </div>
                  <div class="Table-Column">
                      <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
    props: {
        aktFormShow: {
            required: true,
            type: Boolean
        },
        toggleAktAddForm: {
            required: true,
            type: Function
        }
    },
    data() {
        return {
            newAkt: {
                file: null
            },
            aktsArr: {
                id1: {
                    file: null
                },
                id2: {
                    file: null
                },
                id3: {
                    file: null
                },
                id4: {
                    file: null
                }
            }
        }
    },
    methods: {
        textFiles() {
            // console.log(this.newAkt)
            // console.log(this.aktsArr)
        }
    }
}
</script>

<style scoped>
.Card_new-akt {
  max-width: 360px;
  padding: 20px 30px 30px; }
  .Card_new-akt .Heading_lvl2 {
    margin-bottom: 20px;
    color: #000000; }
  .Card_new-akt .Card_bd_color_green {
    padding: 15px 20px 20px; }

.Table_akts-new .Table-Row_head {
  margin-bottom: 5px; }

.Table_akts-new .Table-Column:nth-of-type(1) {
  width: 10%; }

.Table_akts-new .Table-Column:nth-of-type(2) {
  width: 20%; }

.Table_akts-new .Table-Column:nth-of-type(3) {
  width: 20%; }

.Table_akts-new .Table-Column:nth-of-type(4) {
  width: 12%; }

.Table_akts-new .Table-Column:nth-of-type(5) {
  width: 15%; }

.Table_akts-new .Table-Column:nth-of-type(6) {
  width: 18%; }

.Table_akts-new .Table-Column:nth-of-type(7) {
  width: 5%; }
</style>

<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <h1 class="Heading_lvl1">
          Создание проекта
      </h1>
    </div>
    <form enctype="multipart/form-data" method="POST" action="/new-project?action=project_add" class="Form" id="newproject_add">
        <div class="MainSection-Row MainSection-Row_size_add">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Наименование проекта (заказчика)</p>
                        <input type="text"
                              value=""
                              class="Input-Control"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input Input_theme_ruble">
                        <p class="Label">Бюджет сделки</p>
                        <div class="Input-Wrap">
                            <input
                                name="budget"
                                id="budget"
                                type="number"
                                min="0"
                                step="0.01"
                                class="Input-Control"/>
                            <input type="hidden" class="project_id" value="60">
                        </div>
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Выберите продукт</p>
                        <select name="product_id" id="product_id" class="Select-Control">
                            <option value="8">РНИ</option><option value="4">Энергоаудит</option><option value="9">ЭТЛ</option>
                        </select>
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Филиал (привязанность)</p>
                        <select name="filial_id" id="filial_id" class="Select-Control">
                            <option value="0">Выберите филиал</option>
                            <option value="2">Москва</option>
                            <option value="1">Уфа</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Дата начала работ по договору</p>
                        <input type="text"
                              name="plan_data_start"
                              id="plan_data_start"
                              placeholder="дд.мм.гггг"
                              value=""
                              class="Input-Control datepicker-here"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Дата окончания работ по договору</p>
                        <input type="text"
                              name="plan_data_end"
                              id="plan_data_end"
                              placeholder="дд.мм.гггг"
                              value=""
                              class="Input-Control datepicker-here"
                        />
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Место проведения работ</p>
                        <input type="text"
                              name="zakazchik_mesto"
                              id="zakazchik_mesto"
                              value=""
                              class="Input-Control"
                        />
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Адрес заказчика</p>
                        <input type="text"
                              name="zakazchik_address"
                              id="zakazchik_address"
                              value=""
                              class="Input-Control"
                        />
                    </div>
                </div>
            </div>
            <div class="Form-Row">
                <oko-file 
                    :size="'default'"
                    :label="'Файл договора'"
                    :btnText="'Выберите файл'"
                />
            </div>
            <div class="Form-Row">
                <p class="Label">Примечание</p>
                <textarea name="primechanie" id="primechanie" cols="30" rows="10" class="Textarea" placeholder="Введите текст..."></textarea>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_title-lvl2 MainSection-Row_noBottomPadding">
            <h2 class="Heading_lvl2">Данные о контрагенте</h2>
        </div>
        <div class="MainSection-Row MainSection-Row_size_add">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input Input_type_search">
                        <p class="Label">Наименование организации или ФИО</p>
                        <autocomplete
                            :search="search"
                            placeholder="Введите наименование"
                            aria-label="Поиск контрагентов"
                        >
                            <template
                                v-slot="{
                                    rootProps,
                                    inputProps,
                                    inputListeners,
                                    resultListProps,
                                    resultListListeners,
                                    results,
                                    resultProps
                                }"
                            >
                                <div v-bind="rootProps">
                                    <autocomplete-input
                                        v-bind="inputProps"
                                        v-on="inputListeners"
                                        :class="[
                                                'autocomplete-input',
                                                { 'autocomplete-input-no-results': noResults },
                                                { 'autocomplete-input-focused': autocomleteComponent.focused }
                                            ]"
                                        @focus="handleFocus"
                                        @blur="handleBlur"
                                    ></autocomplete-input>
                                    <ul
                                        v-if="noResults"
                                        class="autocomplete-result-list"
                                        style="position: absolute; z-index: 1; width: 100%; top: 100%;"
                                    >
                                        <li class="autocomplete-result">No results found</li>
                                    </ul>
                                    <ul
                                         class="Input-SearchResult" 
                                        v-bind="resultListProps" 
                                        v-on="resultListListeners"
                                    >
                                        <li
                                            v-for="(result, index) in results"
                                            :key="resultProps[index].id"
                                            v-bind="resultProps[index]"
                                        >{{ result }}</li>
                                        <li 
                                            class="Input-SearchResult-Item Input-SearchResult-Item_all"
                                            @click="toggleCounteragentFullListPopup"
                                        >
                                            смотреть полный список
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </autocomplete>
                    </div>
                </div>
                <div class="Form-Column">
                    <p class="Label">&nbsp;</p>
                    <div 
                        class="Btn Btn_theme_blue chooseFromList"
                        @click="toggleCounteragentFullListPopup"
                    >
                        смотреть полный список
                    </div>
                </div>
            </div>
            <div class="Form-Row">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">ИНН организации или физ. лица</p>
                        <input type="text"
                              value=""
                              class="Input-Control"
                              placeholder="Введите ИНН"
                        />
                    </div>
                </div>
            </div>
            <div class="Form-Row">
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Город</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Уфа</option>
                            <option value="2">Москва</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Form-Row">
                <p class="Label">Телефоны</p>
                <div class="Form-Row">
                    <div class="Flex Flex_justify_space-between">
                        <div class="Form-Column">
                            <div class="Input">
                                <input type="text"
                                      value=""
                                      class="Input-Control"
                                      placeholder="8 (999) 999-99-99"
                                />
                            </div>
                        </div>
                        <div class="Form-Column">
                            <div class="Input Input_num_add">
                                <input type="text"
                                      value=""
                                      class="Input-Control"
                                      placeholder="доб. 11"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Flex Flex_justify_space-between">
                        <div class="Form-Column">
                            <div class="Input">
                                <input type="text"
                                      value=""
                                      class="Input-Control"
                                      placeholder="8 (999) 999-99-99"
                                />
                            </div>
                        </div>
                        <div class="Form-Column">
                            <div class="Input Input_num_add">
                                <input type="text"
                                      value=""
                                      class="Input-Control"
                                      placeholder="доб. 11"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Link Link_dashed Link_line_add Link_js-add" data-type="phone">+  добавить еще</div>
                </div>
            </div>
            <div class="Form-Row">
                <p class="Label">Email</p>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Input">
                            <input type="email"
                                  value=""
                                  class="Input-Control"
                                  placeholder="ivanov@mail.ru"
                            />
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Input">
                            <input type="email"
                                  value=""
                                  class="Input-Control"
                                  placeholder="ivanov@mail.ru"
                            />
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Link Link_dashed Link_line_add Link_js-add" data-type="email">+  добавить еще</div>
                </div>
            </div>
            <div class="Form-Row">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">Полный адрес (если имеется)</p>
                        <input type="text"
                              value=""
                              class="Input-Control"
                              placeholder="Введите адрес"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_title-lvl2 MainSection-Row_noBottomPadding">
            <h2 class="Heading_lvl2">Контактные лица</h2>
        </div>
        <div class="MainSection-Row">
            <div class="Flex Flex_wrap">
                <div class="Card Card_bd Card_contact-face">
                    <div class="Form-Row">
                        <div class="Form-Column">
                            <div class="Input">
                                <p class="Label">Наименование организации или ФИО</p>
                                <input type="text"
                                      value=""
                                      class="Input-Control"
                                      placeholder="Введите наименование"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Form-Column">
                            <div class="Input">
                                <p class="Label">ИНН организации или физ. лица</p>
                                <input type="text"
                                      value=""
                                      class="Input-Control"
                                      placeholder="Введите ИНН"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Form-Column">
                            <div class="Select Select_theme_arrow">
                                <p class="Label">Город</p>
                                <select name="" id="" class="Select-Control">
                                    <option value="1">Уфа</option>
                                    <option value="2">Москва</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <p class="Label">Телефоны</p>
                        <div class="Form-Row">
                            <div class="Flex Flex_justify_space-between">
                                <div class="Form-Column">
                                    <div class="Input">
                                        <input type="text"
                                              value=""
                                              class="Input-Control"
                                              placeholder="8 (999) 999-99-99"
                                        />
                                    </div>
                                </div>
                                <div class="Form-Column">
                                    <div class="Input Input_num_add">
                                        <input type="text"
                                              value=""
                                              class="Input-Control"
                                              placeholder="доб. 11"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Form-Row">
                            <div class="Flex Flex_justify_space-between">
                                <div class="Form-Column">
                                    <div class="Input">
                                        <input type="text"
                                              value=""
                                              class="Input-Control"
                                              placeholder="8 (999) 999-99-99"
                                        />
                                    </div>
                                </div>
                                <div class="Form-Column">
                                    <div class="Input Input_num_add">
                                        <input type="text"
                                              value=""
                                              class="Input-Control"
                                              placeholder="доб. 11"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Form-Row">
                            <div class="Link Link_dashed Link_line_add Link_js-add" data-type="phone">+  добавить еще</div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <p class="Label">Email</p>
                        <div class="Form-Row">
                            <div class="Form-Column">
                                <div class="Input">
                                    <input type="email"
                                          value=""
                                          class="Input-Control"
                                          placeholder="ivanov@mail.ru"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="Form-Row">
                            <div class="Form-Column">
                                <div class="Input">
                                    <input type="email"
                                          value=""
                                          class="Input-Control"
                                          placeholder="ivanov@mail.ru"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="Form-Row">
                            <div class="Link Link_dashed Link_line_add Link_js-add" data-type="email">+  добавить еще</div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Card Card_bd Card_contact-face">
                    <div class="Card_add Link_js-add" data-type="card">+ добавить контактное лицо</div>
                </div>
            </div>
        </div>
        <div class="MainSection-Row MainSection-Row_noTopPadding">
            <div class="Btn Btn_theme_green Btn_size_m">Добавить проект</div>
        </div>
    </form>
    
    <div 
        class="chooseFromListPopup-Overlay"
        v-if="counteragentFullListPopupShow"
    >
        <div class="chooseFromListPopup">
            <div 
                class="chooseFromListPopup-Close"
                @click="toggleCounteragentFullListPopup"
            >
                <svg class="Icon">
                    <use
                            xlink:href="/img/sprite.svg#cancel"
                            href="/img/sprite.svg#cancel"></use>
                </svg>
            </div>
            <div class="chooseFromListPopup-Search">
                <div class="Search">
                    <div class="Input">
                        <input type="text"
                              value=""
                              class="Input-Control"
                              placeholder="Введите название или ИНН для поиска.."
                        />
                    </div>
                    <div class="Btn Btn_theme_blue">Найти</div>
                </div>
            </div>
            <div class="Table">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Контрагент
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Город
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            ИНН
                        </p>
                    </div>
                </div>
                <div class="Table-Row Table-Row_link" data-counterparties-id="1">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            ЖК «Новоселов»
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Уфа
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            024203222908
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PageProjectsAdd',
    data() {
        return {
            form: {
                counteragentData: {
                    name: ''
                }
            },
            autocomleteComponent: {
                counteragents: [
                    'I',
                    'I1',
                    'I2',
                    'I3',
                    'I4',
                    'I5',
                    'I6',
                    'R',
                    'a'
                ],
                focused: false,
                results: [],
            },
            counteragentFullListPopupShow: false,
        }
    },
    computed: {
        noResults() {
            return this.form.counteragentData.name && this.autocomleteComponent.results.length === 0;
        }
    },
    methods: {
        toggleCounteragentFullListPopup() {
            this.counteragentFullListPopupShow = !this.counteragentFullListPopupShow;
        },
        search(input) {
            this.form.counteragentData.name = input
            if (input.length < 1) {
                this.autocomleteComponent.results = []
            } else {
                this.autocomleteComponent.results = this.autocomleteComponent.counteragents.filter(counteragent => {
                    return counteragent.toLowerCase()
                        .startsWith(input.toLowerCase())
                })
            }
            return this.autocomleteComponent.results.slice(0, 5)
        },
        handleFocus() {
            this.autocomleteComponent.focused = true
        },
        
        handleBlur() {
            this.autocomleteComponent.focused = false
        }
    }
}
</script>

<style scoped>
.MainSection-Row_title {
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px; }

.MainSection-Row_size_add {
  max-width: 650px; }

.Form-Row .Form-Row {
  margin-bottom: 5px; }
  .Form-Row .Form-Row:last-of-type {
    margin-bottom: 0; }

.Input_num_add {
  width: 69px; }

.Card_contact-face {
  width: 400px;
  margin-right: 20px;
  margin-bottom: 20px; }
  .Card_contact-face .Form-Column:nth-of-type(1) {
    width: 280px; }
  .Card_contact-face .Form-Column:nth-of-type(2) {
    width: 69px; }

.Link_line_add {
  margin: 15px 0 20px;
  color: #008acc; }

.File_theme_link {
  display: inline-block; }

.Card_addWrap {
  height: 100%; }

.Card_add {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #c8c8c8;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; }

.Btn.chooseFromList {
  height: 30px; }

.Input_type_search .Input-SearchResult {
    display: initial;
}
.Input-SearchResult-Item {
    padding-left: 48px;
}
.chooseFromListPopup-Overlay {
    z-index: 500;
}

</style>

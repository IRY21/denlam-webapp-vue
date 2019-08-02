<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <router-link
          class="Link Link_back"
          :to="{name: 'PageKontragents'}"
        >
            Вернуться назад
        </router-link>
        <h1 class="Heading_lvl1">
            Новый контрагент
        </h1>
    </div>
    <form enctype="multipart/form-data" method="POST" action="" class="Form" id="newproject_add">
        <div class="MainSection-Row MainSection-Row_size_add">
            <div class="Form-Row Form-Row_col2">
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
                                <p class="Label">ФИО</p>
                                <input type="text"
                                        value=""
                                        class="Input-Control"
                                        placeholder="Иванов Петр Семенович"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Form-Column">
                            <div class="Input">
                                <p class="Label">Должность</p>
                                <input type="text"
                                        value=""
                                        class="Input-Control"
                                        placeholder="Менеджер по продажам"
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
            <div class="Btn Btn_theme_green Btn_size_m">Добавить контрагента</div>
        </div>
    </form>
  </div>
</template>

<script>
export default {

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
</style>

<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <h1 class="Heading_lvl1">
            Пользователи
        </h1>
    </div>
    <div class="MainSection-Row">
        <div class="Flex Flex_wrap CardsWrap">
            <div class="Card Card_bgWhite Card_bd Card_bd_color_darkBlue SettingCard" id="SettingCard1">
                <div class="Form userinfoblock">
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Логин</span>
                            <input name="userlogin" id="userlogin1" value="admin" data-id="1" type="text" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Пароль</span>
                            <input name="userpassword" id="userpassword1" data-id="1" type="password" class="Input-Control" placeholder="Введите для изменения">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Имя пользователя</span>
                            <input name="username" id="username1" value="Иван Иванов" data-id="1" type="text" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Полномочия</span>
                            <select name="prava" id="prava1" data-id="1" class="Select-Control">
                                <option value="1" selected="">Администратор</option><option value="2">Бухгалтерия</option><option value="3">Юрист</option><option value="4">Менеджер</option>									</select>
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Филиал</span>
                            <select name="prava" id="prava1" data-id="1" class="Select-Control">
                                <option value="1" selected="">Все филиалы</option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <div class="Flex">
                            <button class="Btn Btn_theme_green Btn_size_m save_userinfo_but" id="save_userinfo_but6" data-id="6">Сохранить</button>

                            <div class="Btn Btn_theme_delete" id="delete_userinfo_but6" data-id="6">Удалить</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Card Card_bgWhite Card_bd Card_bd_color_darkBlue SettingCard" id="SettingCard6">
                <div class="Form userinfoblock">
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Логин</span>
                            <input name="userlogin" id="userlogin6" value="glavinzh" data-id="6" type="text" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Пароль</span>
                            <input name="userpassword" id="userpassword6" data-id="6" type="password" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Имя пользователя</span>
                            <input name="username" id="username6" value="Александ Сергеев" data-id="6" type="text" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Полномочия</span>
                            <select name="prava" id="prava6" data-id="6" class="Select-Control">
                                <option value="1" selected="">Руководитель филиала</option><option value="1">Администратор</option><option value="2">Бухгалтерия</option><option value="3">Юрист</option><option value="4">Менеджер</option>									</select>
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Филиал</span>
                            <select name="prava" id="prava1" data-id="1" class="Select-Control">
                                <option value="1" selected="">Все филиалы</option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <div class="Flex">
                            <button class="Btn Btn_theme_green Btn_size_m save_userinfo_but" id="save_userinfo_but6" data-id="6">Сохранить</button>

                            <div class="Btn Btn_theme_delete" id="delete_userinfo_but6" data-id="6">Удалить</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Card Card_bgLightGreen Card_bd Card_bd_color_green SettingCard">
                <div class="Form addnewuserform">
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Логин</span>
                            <input name="userlogin" id="userlogin0" type="text" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Пароль</span>
                            <input name="userpassword" id="userpassword0" type="password" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Input">
                            <span class="Label">Имя пользователя</span>
                            <input name="username" id="username0" type="text" class="Input-Control">
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Полномочия</span>
                            <select name="prava" id="prava0" class="Select-Control">
                                <option value="1">Администратор</option><option value="2">Бухгалтерия</option><option value="3">Юрист</option><option value="4">Менеджер</option>									</select>
                        </label>
                    </div>
                    <div class="Form-Row">
                        <label class="Select Select_theme_arrow">
                            <span class="Label">Филиал</span>
                            <select name="prava" id="prava1" data-id="1" class="Select-Control">
                                <option value="1" selected="">Все филиалы</option>
                            </select>
                        </label>
                    </div>
                    <div class="Form-Row Form-Row_btnWrap">
                        <button class="Btn Btn_theme_green Btn_size_m adduser_but">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
        <h1 class="Heading_lvl1">
            Наши услуги
        </h1>
    </div>
    <div class="MainSection-Row MainSection-Row_title-lvl2">
        <h1 class="Heading_lvl2">
            Продукты
        </h1>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
        <div class="ProductWrap">
            <div class="Form-Row Flex">
                <span class="Text">РНИ</span>
                <div class="Btn Btn_theme_delete">Удалить</div>
            </div>
            <div class="Form-Row Flex">
                <span class="Text">Энергоаудит</span>
                <div class="Btn Btn_theme_delete">Удалить</div>
            </div>
            <div class="Form-Row Flex">
                <span class="Text">ЭТЛ</span>
                <div class="Btn Btn_theme_delete">Удалить</div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_add-product">
            <form action="" class="Form">
                <div class="Form-Row">
                    <h3 class="Heading_lvl3">Добавить продукт</h3>
                </div>
                <div class="Form-Row">
                    <label class="Input Input_bgWhite">
                        <span class="Label">Виберите проект</span>
                        <input type="text" class="Input-Control" placeholder="Название продукта">
                    </label>
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
.SettingCard {
  width: calc(33.33% - 20px * 2/3);
  padding: 15px 23px 17px;
  margin-bottom: 20px;
  margin-right: 20px; }
  .SettingCard:nth-of-type(3n) {
    margin-right: 0; }
  .SettingCard .Btn_theme_delete {
    margin-left: 28px; }

.Card_add-product {
  max-width: 360px;
  padding: 15px 90px 20px 20px; }
  .Card_add-product .Heading_lvl3 {
    margin-bottom: 10px; }

.ProductWrap .Btn_theme_delete {
  margin-left: 20px; }
</style>

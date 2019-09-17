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
            Новый сотрудник
        </h1>
    </div>
    <div class="MainSection-Row MainSection-Row_size_add">
        <form action="" class="Form Form_workers">
            <div class="Form-Row Form-Row_col2">
                <div class="Form-Column">
                    <div class="Input">
                        <p class="Label">ФИО</p>
                        <input type="text"
                                value=""
                                class="Input-Control"
                                placeholder="Введите ФИО"
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
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Город проживания</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Все города</option>
                            <option value="1">Уфа</option>
                        </select>
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Филиал (виден только "для своих")</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Все филиалы</option>
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
                                value=""
                                class="Input-Control MaskedPhone"
                                placeholder="8 (___) ___-__-__"
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
                                placeholder="Введите Email"
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
                                value=""
                                class="Input-Control"
                                placeholder="Введите оклад"/>
                        </div>
                    </div>
                </div>
                <div class="Form-Column">
                    <div class="Select Select_theme_arrow">
                        <p class="Label">Возможность командировок</p>
                        <select name="" id="" class="Select-Control">
                            <option value="1">Нет</option>
                            <option value="1">Боле 300 км</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Form-Row Form-Row_btnWrap">
                <div class="Btn Btn_theme_green Btn_size_m">Добавить</div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            worker: {
                
            }
        }
    }
}
</script>

<style scoped>
.Form_workers{
  max-width: 650px
}

</style>

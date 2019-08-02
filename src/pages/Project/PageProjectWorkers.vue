<template>
  <div>
    <div class="MainSection-Row">
      <h2 class="Heading_lvl2">Исполнители</h2>
      <p class="Text Text_spec">Анисимов Натан Борисович - 56 400,00 руб.</p>
      <p class="Text Text_spec">Зимин Альберт Эльдарович - 1,00 руб.</p>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_size_half">
            <form action="" class="Form">
                <div class="Form-Row">
                    <h3 class="Heading_lvl3">Новый исполнитель</h3>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Select Select_theme_arrow Select_bgWhite">
                            <select name="worker_id" id="worker_id" class="Select-Control">
                                <option value="0">Выберите сотрудника</option><option value="3">Анисимов Натан Борисович</option><option value="16">Б1</option><option value="9">Елисеев Арсений Иринеевич</option><option value="2">Зимин Альберт Эльдарович</option><option value="4">Иванов Дмитрий Авдеевич</option><option value="14">Иванов Кондрат Кимович</option><option value="5">Николаев Макар Михаилович</option><option value="11">Пестов Филипп Семенович</option><option value="13">Поляков Мирослав Иванович</option><option value="15">Селиверстов Арсений Евгеньевич</option><option value="8">Сидоров Климент Парфеньевич</option><option value="10">Сорокин Сергей Артемович</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Input Input_bgWhite Input_theme_ruble">
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
                </div>
                <div class="Form-Row">
                    <div class="Btn Btn_theme_green Btn_size_m">Добавить</div>
                </div>
                <div class="Form-Row">
                    <span style="color: #989898;">Максимальная сумма 126 524,87 руб.</span>
                </div>
            </form>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Line"></div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd_dashed Card_three-fourths">
            <div class="Table Table_project-workers">
                <div class="Table-Row Table-Row_head">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Дата
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            ФИО сотрудника
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
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            10 авг 2018 в 16:58
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Анисимов Натан Борисович
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            6 400,00 руб.
                        </p>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            10 авг 2018 в 16:58
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Анисимов Натан Борисович
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            6 400,00 руб.
                        </p>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            10 авг 2018 в 16:58
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Анисимов Натан Борисович
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            6 400,00 руб.
                        </p>
                    </div>
                    <div class="Table-Column Flex Flex_align_center Flex_justify_center">
                        <div class="Btn Btn_theme_delete">Удалить</div>
                    </div>
                </div>
                <div class="Table-Row Table-Row_total">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            Итого<br>
                            начислено
                        </p>
                    </div>
                    <div class="Table-Column">
                    </div>
                    <div class="Table-Column Flex Flex_align_end">
                        <div class="Table-Text">
                            26 400,00 руб.
                        </div>
                    </div>
                    <div class="Table-Column">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Card Card_bgGray Card_bd Card_bd_dashed Card_size_half">
            <form action="" class="Form">
                <div class="Form-Row">
                    <h3 class="Heading_lvl3">Добавить премию (аванс) по проекту</h3>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Select Select_theme_arrow Select_bgWhite">
                            <p class="Label">Виберите сотрудника</p>
                            <select name="worker_id" id="worker_id" class="Select-Control">
                                <option value="0">Выберите сотрудника</option><option value="3">Анисимов Натан Борисович</option><option value="16">Б1</option><option value="9">Елисеев Арсений Иринеевич</option><option value="2">Зимин Альберт Эльдарович</option><option value="4">Иванов Дмитрий Авдеевич</option><option value="14">Иванов Кондрат Кимович</option><option value="5">Николаев Макар Михаилович</option><option value="11">Пестов Филипп Семенович</option><option value="13">Поляков Мирослав Иванович</option><option value="15">Селиверстов Арсений Евгеньевич</option><option value="8">Сидоров Климент Парфеньевич</option><option value="10">Сорокин Сергей Артемович</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Form-Column">
                        <div class="Input Input_bgWhite Input_theme_ruble">
                            <p class="Label">Сумма для начисления</p>
                            <div class="Input-Wrap">
                                <input
                                    name="avans"
                                    id="avans"
                                    type="number"
                                    step="0.01"
                                    data-maxsumma="126524.87"
                                    value="0"
                                    class="Input-Control"/>
                                <input type="hidden" class="project_id" value="60">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Btn Btn_theme_blue Btn_size_m">Начислить</div>
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

<style scope>
.Text_spec {
  margin-bottom: 10px; }
  .Text_spec:last-of-type {
    margin-bottom: 0; }

.Table_project-workers .Table-Column:nth-of-type(1) {
  width: 25%; }

.Table_project-workers .Table-Column:nth-of-type(2) {
  width: 45%; }

.Table_project-workers .Table-Column:nth-of-type(3) {
  width: 20%; }

.Table_project-workers .Table-Column:nth-of-type(4) {
  width: 10%; }
</style>

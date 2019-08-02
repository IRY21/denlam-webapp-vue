<template>
  <div>
    <h2 class="Heading_lvl2">О проекте</h2>
    <div class="Flex">
        <div class="PageProjectsAbout-Left">
            <form action="" class="Form">
                <div class="Card Card_bd">
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Этап сделки</span>
                            <div class="Input-Changeable Input-Changeable_static">
                                <div class="Flex Flex_align_center">
                                    <p class="Input-Text">В работе</p>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                                        <use
                                                xlink:href="/img/sprite.svg#edit"
                                                href="/img/sprite.svg#edit"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="Input-Changeable Input-Changeable_control" style="display: none;">
                                <div class="Flex Flex_align_center">
                                    <div class="Select Select_theme_arrow">
                                        <select name="voronka_id" id="voronka_id" class="Select-Control ControlEl">
                                            <option value="Новый договор" selected="">Новый договор</option>
                                            <option value="В работe">В работe</option>
                                            <option value="Отчет сдан">Отчет сдан</option>
                                            <option value="Акт подписан">Акт подписан</option>
                                        </select>
                                    </div>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_save">
                                        <use
                                                xlink:href="/img/sprite.svg#save"
                                                href="/img/sprite.svg#save"></use>
                                    </svg>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel">
                                        <use
                                                xlink:href="/img/sprite.svg#cancel"
                                                href="/img/sprite.svg#cancel"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Филиал</span>
                            <div class="Input-Changeable Input-Changeable_static">
                                <div class="Flex Flex_align_center">
                                    <p class="Input-Text">Уфа</p>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                                        <use
                                                xlink:href="/img/sprite.svg#edit"
                                                href="/img/sprite.svg#edit"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="Input-Changeable Input-Changeable_control" style="display: none;">
                                <div class="Flex Flex_align_center">
                                    <div class="Select Select_theme_arrow">
                                        <select name="filial_id" id="filial_id" class="Select-Control ControlEl">
                                            <option value="Уфа" selected="">Уфа</option>
                                            <option value="Москва">Москва</option>
                                        </select>
                                    </div>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_save">
                                        <use
                                                xlink:href="/img/sprite.svg#save"
                                                href="/img/sprite.svg#save"></use>
                                    </svg>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel">
                                        <use
                                                xlink:href="/img/sprite.svg#cancel"
                                                href="/img/sprite.svg#cancel"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Бюджет сделки</span>
                            <div class="Input-Changeable Input-Changeable_static">
                                <div class="Flex Flex_align_center">
                                    <p class="Input-Text">126 524,87</p><span class="Input-Text">&nbsp;руб.</span>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                                        <use
                                                xlink:href="/img/sprite.svg#edit"
                                                href="/img/sprite.svg#edit"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="Input-Changeable Input-Changeable_control" style="display: none;">
                                <div class="Flex Flex_align_center">
                                    <div class="Input">
                                        <input class="Input-Control ControlEl" name="budget" id="budget" step="0.01" type="number" value="126524.87"/>
                                    </div>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_save">
                                        <use
                                                xlink:href="/img/sprite.svg#save"
                                                href="/img/sprite.svg#save"></use>
                                    </svg>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel">
                                        <use
                                                xlink:href="/img/sprite.svg#cancel"
                                                href="/img/sprite.svg#cancel"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Продукт</span>
                            <div class="Input-Changeable Input-Changeable_static">
                                <div class="Flex Flex_align_center">
                                    <p class="Input-Text">Энергетическое обследование</p>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                                        <use
                                                xlink:href="/img/sprite.svg#edit"
                                                href="/img/sprite.svg#edit"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="Input-Changeable Input-Changeable_control" style="display: none;">
                                <div class="Flex Flex_align_center">
                                    <div class="Select Select_theme_arrow">
                                        <select name="product_id" id="product_id" class="Select-Control ControlEl">
                                            <option value="Энергетическое обследование" selected="">Энергетическое обследование</option>
                                            <option value="Энергоаудит">Энергоаудит</option>
                                            <option value="ЭТЛ">ЭТЛ</option>
                                        </select>
                                    </div>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_save">
                                        <use
                                                xlink:href="/img/sprite.svg#save"
                                                href="/img/sprite.svg#save"></use>
                                    </svg>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel">
                                        <use
                                                xlink:href="/img/sprite.svg#cancel"
                                                href="/img/sprite.svg#cancel"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Даты работы по договору</span>
                            <div class="Input-Changeable Input-Changeable_static">
                                <div class="Flex Flex_align_center">
                                    <p class="Input-Text">01.01.2019 - 31.01.2019</p>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                                        <use
                                                xlink:href="/img/sprite.svg#edit"
                                                href="/img/sprite.svg#edit"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="Input-Changeable Input-Changeable_control" style="display: none;">
                                <div class="Flex Flex_align_center">
                                    <input type="text"
                                        value="01.01.2019 - 31.01.2019"
                                        data-range="true"
                                        data-multiple-dates-separator=" - "
                                        class="Input-Control datepicker-here ControlEl"
                                        data-position='right bottom'/>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_save">
                                        <use
                                                xlink:href="/img/sprite.svg#save"
                                                href="/img/sprite.svg#save"></use>
                                    </svg>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel">
                                        <use
                                                xlink:href="/img/sprite.svg#cancel"
                                                href="/img/sprite.svg#cancel"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Фактические даты работ</span>
                            <div class="Input-Changeable Input-Changeable_static">
                                <div class="Flex Flex_align_center">
                                    <p class="Input-Text">01.01.2019 - 31.01.2019</p>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_edit">
                                        <use
                                                xlink:href="/img/sprite.svg#edit"
                                                href="/img/sprite.svg#edit"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="Input-Changeable Input-Changeable_control" style="display: none;">
                                <div class="Flex Flex_align_center">
                                    <input type="text"
                                        value="01.01.2019 - 31.01.2019"
                                        data-range="true"
                                        data-multiple-dates-separator=" - "
                                        data-selectedDates=""
                                        class="Input-Control datepicker-here ControlEl"
                                        data-position='right bottom'/>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_save">
                                        <use
                                                xlink:href="/img/sprite.svg#save"
                                                href="/img/sprite.svg#save"></use>
                                    </svg>
                                    <svg class="Input-ChangeBtn ChangeBtn ChangeBtn_type_cancel">
                                        <use
                                                xlink:href="/img/sprite.svg#cancel"
                                                href="/img/sprite.svg#cancel"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input Input_type_changeable">
                            <span class="Label">Примечание</span>
                            <textarea name="primechanie" id="primechanie" cols="30" rows="10" class="Textarea"></textarea>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Form-Line"></div>
                    </div>
                    <div class="Form-Row">
                        <h2 class="Heading_lvl2">Заказчик</h2>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Наименование организации или ФИО</span>
                            <p class="Input-Text">ЖК «Ясная поляна»</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">ИНН организации или физ. лица</span>
                            <p class="Input-Text">024203222908</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Город</span>
                            <p class="Input-Text">Уфа</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Полный адрес (если имеется)</span>
                            <p class="Input-Text">г. Уфа, ул. Ленина, д. 14</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Телефоны</span>
                            <p class="Input-Text Input-Text_multiline">8 (999) 999-99-99&emsp;&emsp;доб. 11</p>
                            <p class="Input-Text Input-Text_multiline">8 (999) 999-99-99&emsp;&emsp;доб. 11</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Email</span>
                            <p class="Input-Text Input-Text_multiline">ivanov@mail.ru</p>
                            <p class="Input-Text Input-Text_multiline">ivanov@mail.ru</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Form-Line"></div>
                    </div>
                    <div class="Form-Row">
                        <h2 class="Heading_lvl2">Иванов Петр Семенович</h2>
                    </div>
                    <div class="Form-Row">
                        <span class="Label">Менеджер по продажам</span>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Телефоны</span>
                            <p class="Input-Text Input-Text_multiline">8 (999) 999-99-99&emsp;&emsp;доб. 11</p>
                            <p class="Input-Text Input-Text_multiline">8 (999) 999-99-99&emsp;&emsp;доб. 11</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Email</span>
                            <p class="Input-Text Input-Text_multiline">ivanov@mail.ru</p>
                            <p class="Input-Text Input-Text_multiline">ivanov@mail.ru</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Form-Line"></div>
                    </div>
                    <div class="Form-Row">
                        <h2 class="Heading_lvl2">Иванов Петр Семенович</h2>
                    </div>
                    <div class="Form-Row">
                        <span class="Label">Менеджер по продажам</span>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Телефоны</span>
                            <p class="Input-Text Input-Text_multiline">8 (999) 999-99-99&emsp;&emsp;доб. 11</p>
                            <p class="Input-Text Input-Text_multiline">8 (999) 999-99-99&emsp;&emsp;доб. 11</p>
                        </div>
                    </div>
                    <div class="Form-Row">
                        <div class="Input">
                            <span class="Label">Email</span>
                            <p class="Input-Text Input-Text_multiline">ivanov@mail.ru</p>
                            <p class="Input-Text Input-Text_multiline">ivanov@mail.ru</p>
                        </div>
                    </div>
                </div>
                <div class="Form-Row">
                    <div class="Btn Btn_theme_red Project-Btn">Удалить проект</div>
                </div>
            </form>
        </div>
        <div class="PageProjectsAbout-Right">

            <!--
                sprite.svg#
                    task-ok         - выполнил задачу
                    file-attached   - прикрепил
                    payment-ok      - поступление оплаты
                    task-new        - задача новая
                    task-fail       - задача не выполнена
                    message         - просто текст
            -->
            <div class="History">
                <div class="History-Chat HistoryChat">
                    <div class="HistoryChat-Card">
                        <p class="HistoryChat-Text">
                            03.08.2018 11:11 Иванов Иван  Проект создан: «Невские теплосети»
                        </p>
                    </div>
                    <div class="HistoryChat-Card">
                        <p class="HistoryChat-Text">
                            03.08.2018 13:33 Иванов Иван  Новый этап:
                            <span class="status">В работе</span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card HistoryChat-Card_task">
                        <p class="HistoryChat-Text">
                            03.08.2018 13:33 Иванов Иван  Новый этап: В работе
                            <span class="info">
                                <span class="Color_blue">До 13.01.2018 15:00</span>
                                Подготовить документы для выезда на объект
                            </span>
                        </p>
                        <p class="HistoryChat-Text">
                            <svg class="Icon">
                                <use
                                        xlink:href="/img/sprite.svg#task-ok"
                                        href="/img/sprite.svg#task-ok"></use>
                            </svg>
                            31.08.2018 15:45 Иван Иванов выполнил задачу
                            <span class="info">Документы приложил</span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card">
                        <p class="HistoryChat-Text">
                            31.09.2018 13:33 Иванов Иван  Новый этап:
                            <span class="status">Акт подписан</span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card HistoryChat-Card_task">
                        <p class="HistoryChat-Text">
                            <svg class="Icon">
                                <use
                                    xlink:href="/img/sprite.svg#file-attached"
                                    href="/img/sprite.svg#file-attached"></use>
                            </svg>
                            Сегодня 16:00 Иванов Иван прикрепил
                            <span class="info">
                                Акт выполненных работ
                                <a href="" class="Link Link_theme_blue">
                                    11.01.2019.pdf
                                </a>
                            </span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card">
                        <p class="HistoryChat-Text">
                            Сегодня 18:00 Иванов Иван
                            <span class="info">
                                Сказали, что оплатят сегодня до ночи. Возможно, перенесут еще на следующую неделю.
                            </span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card HistoryChat-Card_task">
                        <p class="HistoryChat-Text">
                            <svg class="Icon">
                                <use
                                    xlink:href="/img/sprite.svg#payment-ok"
                                    href="/img/sprite.svg#payment-ok"></use>
                            </svg>
                            Сегодня 18:00 Иванов Иван подтвердил поступление оплаты
                            <span class="info">
                                50 000 руб.
                            </span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card HistoryChat-Card_task">
                        <p class="HistoryChat-Text">
                            <svg class="Icon">
                                <use
                                        xlink:href="/img/sprite.svg#task-new"
                                        href="/img/sprite.svg#task-new"></use>
                            </svg>
                            Сегодня 18:00 Иванов Иван новая задача
                            <span class="info">
                                50 000 руб.
                            </span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card HistoryChat-Card_task">
                        <p class="HistoryChat-Text">
                            <svg class="Icon">
                                <use
                                        xlink:href="/img/sprite.svg#task-fail"
                                        href="/img/sprite.svg#task-fail"></use>
                            </svg>
                            Сегодня 18:00 Иванов Иван задача не выполнена
                            <span class="info">
                                50 000 руб.
                            </span>
                        </p>
                    </div>
                    <div class="HistoryChat-Card HistoryChat-Card_task">
                        <p class="HistoryChat-Text">
                            <svg class="Icon">
                                <use
                                        xlink:href="/img/sprite.svg#message"
                                        href="/img/sprite.svg#message"></use>
                            </svg>
                            Сегодня 18:00 Иванов Иван написал
                            <span class="info">
                                50 000 руб.
                            </span>
                        </p>
                    </div>
                </div>
                <div class="History-Control HistoryControl">
                    <p class="HistoryControl-Text">Добавить</p>
                    <form action="" class="Form HistoryControl-Form">
                        <div class="Form-Row">
                            <div class="Flex">
                                <div class="HistoryControl-Choose">
                                    <div class="Select Select_theme_arrow Select_bgWhite">
                                        <select name="" id="history-control" class="Select-Control">
                                            <option value="task">Задачу</option>
                                            <option value="note">Заметку</option>
                                            <option value="payment">Оплату</option>
                                            <option value="doc">Документ</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="HistoryControl-Changeable">
                                    <div class="HistoryControl-ChangeableWrap task" style="display: block;">
                                        <div class="Filter">
                                            <div class="Flex Flex_align_end Filter-Column">
                                                <p class="Filter-Title HistoryControl-Text">
                                                    для
                                                </p>
                                                <div class="Select Select_theme_arrow Select_bgWhite">
                                                    <select name="" id="" class="Select-Control">
                                                        <option value="Иван Иванов">Иван Иванов</option>
                                                        <option value="Иван Иванов">Иван Иванов</option>
                                                        <option value="Иван Иванов">Иван Иванов</option>
                                                        <option value="Иван Иванов">Иван Иванов</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="Flex Flex_align_end Filter-Column">
                                                <p class="Filter-Title HistoryControl-Text">
                                                    срок
                                                </p>
                                                <div class="Input Input_bgWhite">
                                                    <input type="text"
                                                        value="12.12.2018"
                                                        class="Input-Control datepicker-here"
                                                        data-position='left bottom'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="HistoryControl-ChangeableWrap note" style="display: none;">
                                    </div>
                                    <div class="HistoryControl-ChangeableWrap payment" style="display: none;">
                                        <div class="Filter">
                                            <div class="Flex Flex_align_end Filter-Column">
                                                <p class="Filter-Title HistoryControl-Text">
                                                    дата
                                                </p>
                                                <div class="Input Input_bgWhite">
                                                    <input type="text"
                                                        value="12.12.2018"
                                                        class="Input-Control datepicker-here"
                                                        data-position='left bottom'/>
                                                </div>
                                            </div>
                                            <div class="Flex Flex_align_end Filter-Column">
                                                <p class="Filter-Title HistoryControl-Text">
                                                    сумма
                                                </p>
                                                <div class="Input Input_bgWhite">
                                                    <input type="number"
                                                        step="0.01"
                                                        value=""
                                                        class="Input-Control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="HistoryControl-ChangeableWrap doc" style="display: none;">
                                        <div class="Filter">
                                            <div class="Flex Flex_align_end Filter-Column">
                                                <p class="Filter-Title HistoryControl-Text">
                                                    тип
                                                </p>
                                                <div class="Select Select_theme_arrow Select_bgWhite">
                                                    <select name="" id="" class="Select-Control">
                                                        <option value="Акт">Акт</option>
                                                        <option value="Отчет">Отчет</option>
                                                        <option value="Другой файл">Другой файл</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="Flex Flex_align_end Filter-Column">
                                                <p class="Filter-Title HistoryControl-Text">

                                                </p>
                                                <label class="File File_theme_link">
                                                    <input type="file" class="File-Control">
                                                    <div class="File-Link">Прикрепить файл</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Form-Row">
                            <textarea name="" id="" cols="30" rows="10" class="Textarea Textarea_theme_white" placeholder="Текст..."></textarea>
                        </div>
                        <div class="Form-Row">
                            <div class="Btn Btn_theme_green HistoryControl-Btn">Добавить</div>
                        </div>
                    </form>
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
.Project-Btn {
  width: 162px;
  height: 39px;
  margin-top: 20px; }

.PageProjectsAbout-Left {
  width: 370px;
  padding-right: 20px; }

.PageProjectsAbout-Right {
  width: calc(100% - 370px);
  position: relative; }
</style>

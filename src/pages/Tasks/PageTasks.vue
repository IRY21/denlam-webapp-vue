<template>
  <div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title">
      <h1 class="Heading_lvl1">
          Задачи
      </h1>
    </div>
    <div class="MainSection-Row">
        <h2 class="Heading_lvl2 Heading-Task_overdue">Просроченные задачи</h2>
        <div class="Task-Row">
            <div class="Task-Info">
                <p class="Task-Text">
                    Позвонить клиенту для уточнения деталей договора
                </p>
                <p class="Task-Text Task-Text_date">
                    23.11.2018 до 23:00 по проекту «Невский теплосети» от Иван Иванов
                </p>
            </div>
            <div class="Task-Control">
                <textarea name="" id="" cols="30" rows="10" class="Textarea">Здесь должен быть текст выполнения задачи</textarea>
                <div class="Btn Btn_theme_green">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#task-ok"
                            href="/img/sprite.svg#task-ok"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="Task-Row">
            <div class="Task-Info">
                <p class="Task-Text">
                    Позвонить клиенту для уточнения деталей договора
                </p>
                <p class="Task-Text Task-Text_date">
                    23.11.2018 до 23:00 по проекту «Невский теплосети» от Иван Иванов
                </p>
            </div>
            <div class="Task-Control">
                <textarea name="" id="" cols="30" rows="10" class="Textarea">Здесь должен быть текст выполнения задачи</textarea>
                <div class="Btn Btn_theme_green">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#task-ok"
                            href="/img/sprite.svg#task-ok"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <h2 class="Heading_lvl2 Heading-Task_today">Сегодня</h2>
        <div class="Task-Row">
            <div class="Task-Info">
                <p class="Task-Text">
                    Позвонить клиенту для уточнения деталей договора
                </p>
                <p class="Task-Text Task-Text_date">
                    23.11.2018 до 23:00 по проекту «Невский теплосети» от Иван Иванов
                </p>
            </div>
            <div class="Task-Control">
                <textarea name="" id="" cols="30" rows="10" class="Textarea">Здесь должен быть текст выполнения задачи</textarea>
                <div class="Btn Btn_theme_green">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#task-ok"
                            href="/img/sprite.svg#task-ok"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="Task-Row">
            <div class="Task-Info">
                <p class="Task-Text">
                    Позвонить клиенту для уточнения деталей договора
                </p>
                <p class="Task-Text Task-Text_date">
                    23.11.2018 до 23:00 по проекту «Невский теплосети» от Иван Иванов
                </p>
            </div>
            <div class="Task-Control">
                <textarea name="" id="" cols="30" rows="10" class="Textarea">Здесь должен быть текст выполнения задачи</textarea>
                <div class="Btn Btn_theme_green">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#task-ok"
                            href="/img/sprite.svg#task-ok"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <h2 class="Heading_lvl2 Heading-Task_later">Завтра и далее</h2>
        <div class="Task-Row">
            <div class="Task-Info">
                <p class="Task-Text">
                    Позвонить клиенту для уточнения деталей договора
                </p>
                <p class="Task-Text Task-Text_date">
                    23.11.2018 до 23:00 по проекту «Невский теплосети» от Иван Иванов
                </p>
            </div>
            <div class="Task-Control">
                <textarea name="" id="" cols="30" rows="10" class="Textarea">Здесь должен быть текст выполнения задачи</textarea>
                <div class="Btn Btn_theme_green">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#task-ok"
                            href="/img/sprite.svg#task-ok"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="Task-Row">
            <div class="Task-Info">
                <p class="Task-Text">
                    Позвонить клиенту для уточнения деталей договора
                </p>
                <p class="Task-Text Task-Text_date">
                    23.11.2018 до 23:00 по проекту «Невский теплосети» от Иван Иванов
                </p>
            </div>
            <div class="Task-Control">
                <textarea name="" id="" cols="30" rows="10" class="Textarea">Здесь должен быть текст выполнения задачи</textarea>
                <div class="Btn Btn_theme_green">
                    <svg class="Icon">
                        <use
                            xlink:href="/img/sprite.svg#task-ok"
                            href="/img/sprite.svg#task-ok"></use>
                    </svg>
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
.Heading-Task_overdue {
  color: #ff0000; }

.Heading-Task_today {
  color: #008acc; }

.Heading-Task_later {
  color: #82bf2b; }

.Task-Row {
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e7e7e7;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }
  .Task-Row:last-of-type {
    border-bottom: none; }

.Task-Info {
  width: calc(100% - 215px);
  padding-right: 20px; }

.Task-Text {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500; }
  .Task-Text:last-of-type {
    margin-bottom: 0; }
  .Task-Text_date {
    font-size: 12px;
    font-weight: 400;
    color: #adadad; }

.Task-Control {
  width: 215px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }
  .Task-Control .Textarea {
    width: calc(100% - 45px);
    height: 42px;
    max-width: calc(100% - 45px);
    min-width: calc(100% - 45px);
    max-height: 42px;
    min-height: 42px;
    padding-top: 5px;
    font-size: 12px;
    color: #8d8d8d; }
  .Task-Control .Btn {
    width: 42px;
    height: 42px;
    margin-left: 3px;
    opacity: .5; }
    .Task-Control .Btn .Icon {
      width: 28px;
      height: 28px;
      -webkit-transition: all ease-in-out .25s;
      -o-transition: all ease-in-out .25s;
      transition: all ease-in-out .25s; }
    .Task-Control .Btn:hover {
      opacity: 1; }
      .Task-Control .Btn:hover .Icon {
        fill: #fff; }
</style>

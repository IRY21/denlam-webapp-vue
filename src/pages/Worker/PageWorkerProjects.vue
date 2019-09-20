<template>
  <div>
    <OkoTitle 
      :title="`${ clientName } || Проекты`" />

    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2">Связанные проекты</h2>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_noBottomPadding MainSection-Row_title_no-mrg">
        <h3 class="Heading_lvl3 Color_black">Текущие</h3>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey">
        <div class="Table Table_workers-in">
            <div class="Table-Row Table-Row_head">
                <div class="Table-Column">
                    <p class="Table-Text">
                        Название проекта
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Плановые даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Фактические даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Бюджет
                    </p>
                </div>
            </div>
            <div class="Table-Row">
                <div class="Table-Column">
                    <p class="Table-Text">
                        <router-link
                          class="Link Link_no-decoration"
                          :to="'/project/1/about'"
                        >
                            KFC
                        </router-link>
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        04.06.2018 - 30.07.2019
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        17.10.2018 - неизвестно
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        564 000 руб.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey MainSection-Row_noBottomPadding MainSection-Row_title_no-mrg">
        <h3 class="Heading_lvl3 Color_black">Предыдущие</h3>
    </div>
    <div class="MainSection-Row MainSection-Row_bgGrey">
        <div class="Table Table_workers-in">
            <div class="Table-Row Table-Row_head">
                <div class="Table-Column">
                    <p class="Table-Text">
                        Название проекта
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Плановые даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Фактические даты работ
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        Бюджет
                    </p>
                </div>
            </div>
            <div class="Table-Row">
                <div class="Table-Column">
                    <p class="Table-Text">
                        <router-link href="/project/about" 
                          class="Link Link_no-decoration"
                          :to="'/project/1/about'"
                        >
                            БЦ «Прага»
                        </router-link>
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        04.06.2018 - 30.07.2019
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        21.07.2018 - 03.09.2018
                    </p>
                </div>
                <div class="Table-Column">
                    <p class="Table-Text">
                        61 190 руб.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        clientName: {
            required: true,
            type: String
        }
    },
}
</script>

<style scoped>
.Table_workers-in .Table-Row_head {
  margin-bottom: 5px; }

.Table_workers-in .Table-Column:nth-of-type(1) {
  width: 45%; }

.Table_workers-in .Table-Column:nth-of-type(2) {
  width: 20%; }

.Table_workers-in .Table-Column:nth-of-type(3) {
  width: 20%; }

.Table_workers-in .Table-Column:nth-of-type(4) {
  width: 15%; }
</style>

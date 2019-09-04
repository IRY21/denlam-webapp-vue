<template>
  <div>
    <OkoTitle 
      :title="`${clientName} || Акты выполненных работ`" />

    <div class="MainSection-Row MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2 Color_black">Акты на подписании</h2>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding MainSection-Row_noBottomPadding">
        <div class="Card Card_bgGray">
            <div class="Table Table_counterparties-akts">
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
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
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
                        <label class="File File_theme_link">
                            <input type="file" class="File-Control">
                            <div class="File-Link">Прикрепить скан</div>
                        </label>
                    </div>
                    <div class="Table-Column">
                        <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
                        <label class="File File_theme_link">
                            <input type="file" class="File-Control">
                            <div class="File-Link">Прикрепить скан</div>
                        </label>
                    </div>
                    <div class="Table-Column">
                        <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
                            <a href="/projects/about" class="Link Link_no-decoration">
                                Зимний лес Ноябрь
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <label class="File File_theme_link">
                            <input type="file" class="File-Control">
                            <div class="File-Link">Прикрепить скан</div>
                        </label>
                    </div>
                    <div class="Table-Column">
                        <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
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
                        <label class="File File_theme_link">
                            <input type="file" class="File-Control">
                            <div class="File-Link">Прикрепить скан</div>
                        </label>
                    </div>
                    <div class="Table-Column">
                        <div class="Btn Btn_theme_blue Table-ControlEl">Подтвердить возврат</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="MainSection-Row">
        <div class="Line"></div>
    </div>
    <div class="MainSection-Row MainSection-Row_title-lvl2">
        <h2 class="Heading_lvl2 Color_black">Подписанные акты</h2>
    </div>
    <div class="MainSection-Row MainSection-Row_noTopPadding">
        <div class="Card Card_bgGray">
            <div class="Table Table_counterparties-akts">
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
                </div>
                <div class="Table-Row">
                    <div class="Table-Column">
                        <p class="Table-Text">
                            01.01.2019
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Новоселов»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column">

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
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Новоселов»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column">

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
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">

                    </div>
                    <div class="Table-Column">

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
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Новоселов»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column">

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
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Новоселов»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">
                        <a href="/files/" class="Link Link_theme_doc Table-Text" target="_blank">
                            <img src="/img/scan.svg" alt="" class="Icon">
                            Файл скан 123.jpg
                        </a>
                    </div>
                    <div class="Table-Column">

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
                            <a href="/projects/about" class="Link Link_no-decoration">
                                ЖК «Июнь»
                            </a>
                        </p>
                    </div>
                    <div class="Table-Column">
                        <p class="Table-Text">
                            20 019 руб.
                        </p>
                    </div>
                    <div class="Table-Column">

                    </div>
                    <div class="Table-Column">

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
        clientName: {
            required: true,
            type: String
        }
    },
}
</script>

<style scoped>
.Table-Row_head {
  margin-bottom: 5px; }

.Table_counterparties-akts .Table-Column:nth-of-type(1) {
  width: 15%; }

.Table_counterparties-akts .Table-Column:nth-of-type(2) {
  width: 30%; }

.Table_counterparties-akts .Table-Column:nth-of-type(3) {
  width: 15%; }

.Table_counterparties-akts .Table-Column:nth-of-type(4) {
  width: 20%; }

.Table_counterparties-akts .Table-Column:nth-of-type(5) {
  width: 20%; }
</style>

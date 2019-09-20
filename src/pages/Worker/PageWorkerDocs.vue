<template>
  <div>
    <OkoTitle 
      :title="`${ clientName } || Документы`" />

    <div class="MainSection-Row MainSection-Row_title-lvl2 MainSection-Row_noBottomPadding">
        <h2 class="Heading_lvl2">Документы</h2>
    </div>
    <!--
        scan.svg
        excel-file.svg
        word.svg
        rar.svg
        ps.svg
        pdf.svg
        zip.svg
        power-point.svg
    -->
    <div class="MainSection-Row">
        <div class="Label Label_doc">Файлы</div>
        <div class="Docs-Wrap Flex">
            <a href="/files/" class="Link Link_theme_doc Link_theme_no-doc" target="_blank">
                <img src="/img/scan.svg" alt="" class="Icon">
                нет файлов...
            </a>
        </div>
        <form enctype="multipart/form-data" class="fileform" id="fileform1" name="fileform60" method="POST" action="/projects/documents/60?action=add_file">
            <input type="hidden" name="projectid" id="projectid" value="60">
            <input type="hidden" name="type_id" id="type_id" value="1">
            <label class="File File_theme_link">
                <input type="file" name="photo" multiple="" class="File-Control" id="fileinput1" data-id="1" accept=".txt,image/*, .pdf, .docx, .doc, .xlsx, .xls, .pdf, .7z, .rar, .zip" >
                <div class="Btn Btn_theme_green Btn_size_m File-State_ok" id="addfile_btn1" data-id="1">Добавить</div>
            </label>
        </form>
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

</style>

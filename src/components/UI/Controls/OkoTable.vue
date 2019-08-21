<template>
  <div class="Table">
    <div class="Table-Row Table-Row_head">
      <div 
        class="Table-Column"
        v-for="column of columns"
        :key="column.id"
        :style="columnSizeHandler(column)"
      >
        <p class="Table-Text">{{ column.name }}</p>
      </div>
    </div>
    <div 
      class="Table-Row Table-Row_link"
      v-for="item of data"
      :key="item.id"
      @click="callback(item.id)"
    >
      <div 
        class="Table-Column"
        v-for="column of columns"
        :key="column.id"
        :style="columnSizeHandler(column)"
      >
        <p class="Table-Text">{{ item[column.searchName] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* 
  @params
    columns: [
      {
        id: 1,
        name: 'Кто будет отвечать за проекты удаляемого пользователя?',
        searchName: ['name'],
        size: '50%'
      }
    ],
    data: [
      id: 1
      ...
    ],
    callback: [
      function(id)
    ]
*/
export default {
  name: 'OkoTable',
  props: {
    columns: {
      required: true,
      type: Array
    },
    data: {
      required: true,
      type: Array
    },
    callback: {
      type: Function
    }
  },
  methods: {
    columnSizeHandler(column) {
      const columnSize = column.size;
      if (!columnSize) return { width: '100%'}

      return { width: columnSize}
    }
  }
}
</script>

<style scoped lang="scss">
  .Table {
    max-height: 400px;
    overflow-y: scroll;
    &-Row {
      justify-content: flex-start;
    }
    &-Text {
      white-space: initial;
    }
  }
</style>

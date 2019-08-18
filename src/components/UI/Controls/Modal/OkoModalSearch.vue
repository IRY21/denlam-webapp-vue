<template>
  <div 
    class="chooseFromListPopup-Overlay"
  >
    <div class="chooseFromListPopup">
      <div 
        class="chooseFromListPopup-Close" 
        @click="$emit('close')"
      >
        <svg class="Icon">
          <use 
            xlink:href="/img/sprite.svg#cancel" 
            href="/img/sprite.svg#cancel"
          ></use>
        </svg>
      </div>
      <div class="chooseFromListPopup-Search">
        <div class="Search">
          <div class="Input">
            <input
              type="text"
              class="Input-Control"
              :placeholder="placeholder || ''"
              v-model="search"
            >
          </div>
        </div>
      </div>
      <div class="Table">
        <div class="Table-Row Table-Row_head">
          <div 
            class="Table-Column"
            v-for="column of tableColumns"
            :key="column.id"
            :style="columnSizeHandler(column)"
          >
            <p class="Table-Text">{{ column.name }}</p>
          </div>
        </div>
        <div 
          class="Table-Row Table-Row_link"
          v-for="item of filteredList"
          :key="item.id"
          @click="chooseHandler(item.id)"
        >
          <div 
            class="Table-Column"
            v-for="column of tableColumns"
            :key="column.id"
            :style="columnSizeHandler(column)"
          >
            <p class="Table-Text">{{ item[column.searchName] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OkoModalSearch',
  props: {
    searchList: {
      required: true,
      type: Array
    },
    searchParam: {
      required: true,
      type: Array
    },
    tableColumns: {
      required: true,
      type: Array
    },
    callback: {
      required: true,
      type: Function
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      search: '',
      searchAttr: this.searchParam
    }
  },
  computed: {
    filteredList() {
      const params = this.searchParam;
      return this.searchList.filter(item => {
        for (let i = 0; i < params.length; i++) {
          if (item[params[i]]
                .toLowerCase()
                .includes(this.search.toLowerCase())) {
            return true;
          }
        }
        return false;
      })
    }
  },
  methods: {
    chooseHandler(id) {
      this.okoModal_confirm()
        .then(() => {
          this.callback(id);
          this.$emit('close');
        })
        .catch(() => {
          
        })
    },
    columnSizeHandler(column) {
      const columnSize = column.size;
      if (!columnSize) return { width: '100%'}

      return { width: columnSize}
    }
  }
};
</script>

<style scoped lang="scss">
  .chooseFromListPopup-Overlay,
  .chooseFromListPopup {
    width: 100%;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  }
  .chooseFromListPopup-Close {
    top: 0;
  }
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

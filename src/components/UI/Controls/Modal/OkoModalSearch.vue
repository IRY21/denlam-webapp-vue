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
          >
            <p class="Table-Text">{{ item[column.fildsNames] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OkoMadalConfirm } from '@/components/UI/Controls/Modal'

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
    placeholder: {
      type: String
    },
    callback: {
      type: Function
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
          if (item[this.searchParam]
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
      new Promise((resolve, reject) => {
        this.$modal.show(OkoMadalConfirm, {
            resolve: resolve,
            reject: reject
          }, {
            width: 300,
            height: 'auto'
          });
      })
      .then(() => {
        this.callback(id);
        this.$emit('close');
      })
      .catch(() => {
        
      })
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
    &-Column {
      width: auto;
    }
  }
</style>


import { OkoModalResponse, OkoModalSearch, OkoMadalConfirm } from '@/components/UI/Controls/Modal'

export default {
  methods: {
    /* 
      @params
        config {
          type: {
            require: true,
            type: String,
            validData: ['error', 'success']
          },
          message: {
            require: true,
            type: String
          }
        }
    */
    okoModal_response({ type, message }) {
      this.$modal.show(OkoModalResponse, {
        type: type,
        message: message
      }, {
        width: 300,
        height: 'auto'
      });
    },

    /* 
      @params
        config {
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
            type: Array,
            itemsParams: {
              id: {
                required: true,
                type: Number
              },
              name: {
                required: true,
                type: String
              },
              searchName: {
                required: true,
                type: Array
              },
              size: {
                type: String
              }
              // exemple 
                id: 1,
                name: 'Кто будет отвечать за проекты удаляемого пользователя?',
                searchName: ['name'],
                size: '50%'
            }
          },
          callback: {
            required: true,
            type: Function
          },
          placeholder: {
            type: String
          },
          modalSettings: {
            required: true,
            type: Object
          }
        }
    */
    okoModal_search({ searchList,
                           searchParam,
                           tableColumns, 
                           callback, 
                           placeholder, 
                           modalSettings }) {
      this.$modal.show(OkoModalSearch, {
        searchList: searchList,
        searchParam: searchParam,
        tableColumns: tableColumns,
        placeholder: placeholder || 'Найти',
        callback: callback
      }, {
        ...modalSettings
      });
    },
    /* 
      @params
        return Promise
    */
   okoModal_confirm() {
    return new Promise((resolve, reject) => {
      this.$modal.show(OkoMadalConfirm, {
        resolve: resolve,
        reject: reject
      }, {
        width: 300,
        height: 'auto'
      });
    })
    
   }
  }
}
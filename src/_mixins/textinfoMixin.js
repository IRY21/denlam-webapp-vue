export default {
  methods: {
    
    /** 
    * @param { Object } - to which object should be added
    * @param { String } - type of field
    * @param { Event } - click event
    *
    */
    textinfoMixin_addTextinfoField(obj, type, evt) {
      switch (type) {
          case 'phone': {
            obj.phoneFields.push({
                  textinfo_type_id: '1',
                  value1: "",
                  value2: "",
              })
            break;
          }
          case 'email': {
            obj.emailFields.push({
                  textinfo_type_id: '2',
                  value1: "",
              })
            break;
          }
      }
      setTimeout(() => {
          evt.target.parentElement.previousElementSibling.querySelector('input').focus();
      }, 0)
    },

    /** 
    * @param { Object } - to which object should be added
    * @param { String } - type of field
    * @param { Number } - index of field
    *
    */
    textinfoMixin_deleteTextinfoField(obj, type, index) {
      switch (type) {
          case 'phone': {
            obj.phoneFields.splice(index, 1);
            break;
          }
          case 'email': {
            obj.emailFields.splice(index, 1);
            break;
          }
      }
    },

    /** 
    * @param { Array } - textinfo fields
    *
    */
    textinfoMixin_checkTextinfoField(fields) {
      const valuesArr = fields.map(x => x.value1);
      const result = fields.reduce((acc, field, index) => {
          const indexInArr = valuesArr.indexOf(field.value1);
          if(field.value1 &&  indexInArr === index) { 
              if (field.textinfo_type_id === '1') {
                  field.value1 = field.value1.replace(/[^0-9]/g, '');
              }
              acc.push(field);
          }

          return acc;
      }, []);

      return result;
    },
    
  }
}
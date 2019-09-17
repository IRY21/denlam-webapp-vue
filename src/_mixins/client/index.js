export default {
  computed: {
    
  },
  methods: {
    clientMixin_addContactCard() {
      this.contacts.push({
          client_id: "",
          name: "",
          position: "",
          phoneFields: [{
                  textinfo_type_id: '1',
                  value1: "",
                  value2: "",
              }],
          emailFields: [{
                  textinfo_type_id: '2',
                  value1: "",
              }],
      })
    },

    /** 
    * @param { Number } - index of card that has to be deleted
    *
    */
    clientMixin_deleteContactCard(index) {
      this.contacts.splice(index, 1);
    },

    /** 
    * @param { String } - type of field
    * @param { Event } - click event
    *
    */
    clientMixin_addTextinfoField(type, evt) {
      switch (type) {
          case 'phone': {
              this.client.phoneFields.push({
                  textinfo_type_id: '1',
                  value1: "",
                  value2: "",
              })
              break;
          }
          case 'email': {
              this.client.emailFields.push({
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
    * @param { Array } - textinfo fields
    *
    */
    clientMixin_checkTextinfoField(fields) {
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
    
    /** 
    * @param { String } - type of field
    * @param { Number } - index of field
    *
    */
    clientMixin_deleteTextinfoField(type, index) {
      switch (type) {
          case 'phone': {
              this.client.phoneFields.splice(index, 1);
              break;
          }
          case 'email': {
              this.client.emailFields.splice(index, 1);
              break;
          }
      }
    },
  }
}
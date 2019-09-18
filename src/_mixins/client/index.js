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
  }
}
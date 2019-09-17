export default {
  computed: {
    computedParam_currentRouteId() {
      return this.$route.params.id;
    }
  },
  methods: {
    /** 
    * @param { String } - object name
    * @param { Object } - object from which compute the name
    *
    */
    computedParam_name(objName, objWithName) {
      let name = '';
      switch (objWithName[`${objName}_type_id`]) {
          case '1': {
              name = `${objWithName.fizlico_firstname} ${objWithName.fizlico_name} ${objWithName.fizlico_lastname}`;
              break;
          }
          case '2': {
              name = `${objWithName.yurlico_name}`;
              break;
          }
      }
      return name;
    }
  }
}
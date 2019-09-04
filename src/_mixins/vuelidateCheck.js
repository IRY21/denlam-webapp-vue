/**
 * @param { event } - $event 
 * @param { String } - checking form field name (vuelidate of form)
 * @param { String } [formName=form] - checking form name (vuelidate of form) 
 *  
 */
export default {
  methods: {
    vuelidateCheck_input(e, fieldName, formName = 'form') {
      const field = e.target;
      this.$v[formName][fieldName].$touch();
      if (this.$v[formName][fieldName].$error) {
        field.parentNode.classList.add('Input_error');
        setTimeout(() => {
          field.parentNode.classList.remove('Input_error')
        }, 500)
      }
    }
  }
}
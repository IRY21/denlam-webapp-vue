import { OkoModalResponse } from '@/components/UI/Controls/Modal'

export default {
  methods: {
    responseModal_show(type, message) {
      this.$modal.show(OkoModalResponse, {
        type: type,
        message: message
      }, {
        width: 300,
        height: 'auto'
      });
    }
  }
}
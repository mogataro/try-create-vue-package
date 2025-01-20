import MogataroButton from '@/components/mogataro-button.vue'
import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('MogataroButton', MogataroButton)
  },
}

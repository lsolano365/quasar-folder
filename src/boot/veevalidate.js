import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Este campo es requerido'
})

export default async ({ Vue }) => {
  Vue.component('ValidationProvider', ValidationProvider)
}

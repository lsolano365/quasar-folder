<template>
  <q-btn :class="classSize + ' ' + classColor () + ' ' + classDisable + ' ' + classOutline"
  :size="size"
  :color="color"
  :label="label"
  :icon="icon"
  :outline="newOutline"
  :disable="disable"
  ref="p_button"
  rounded
  unelevated></q-btn>
</template>

<script>
export default {
  name: 'PBtn',
  data () {
    return {
      newOutline: this.outline
    }
  },
  methods: {
    /**
     * Método para aplicar estilos de color
     * Aplican 4 clases de color:
     * 'btn_primary1'
     * 'btn_primary2'
     * 'btn_secondary1'
     * 'btn_secondary2'
     */
    classColor () {
      let className = ''
      if (this.color === 'primary1') {
        className = 'btn_primary1'
      } else if (this.color === 'primary2') {
        className = 'btn_primary2'
      } else if (this.color === 'secondary1') {
        className = 'btn-f'
        this.newOutline = true
      } else if (this.color === 'secondary2') {
        className = 'btn_secondary2'
      }
      return className
    }
  },
  computed: {
    /**
     * Clase para tamaño de la fuente
     */
    classSize: function () {
      let className = ''
      if (this.size === 'xs') {
        className = 'btn-xs'
      } else if (this.size === 'sm') {
        className = 'btn-sm'
      } else if (this.size === 'md') {
        className = 'btn-md'
      } else if (this.size === 'lg') {
        className = 'btn-lg'
      } else if (this.size === 'xl') {
        className = 'btn-xl'
      }
      return className
    },
    /**
     * Clase para estilos al desabilitar el botón
     */
    classDisable: function () {
      let className = ''
      if (this.disable) {
        className = 'btn-d'
      }
      if (this.outline) {
        className = 'outline-d'
      }
      return className
    },
    /**
     * Clase para estilos al colocar manualmente el botón outline
     */
    classOutline: function () {
      let className = ''
      if (this.outline) {
        className = 'btn-f'
      }
      return className
    }
  },
  /**
   * Propiedades requeridas
   */
  props: {
    size: {
      type: String,
      default: 'md'
    },
    color: {
      type: String,
      default: null,
      /**
       * Solo permitirá los siguientes valores
       */
      validator: function (value) {
      // El valor debe coincidir con una de estas cadenas de texto
        return ['primary1', 'primary2', 'secondary1', 'secondary2'].indexOf(value) !== -1
      }
    },
    label: {
      type: String
    },
    icon: {
      type: String
    },
    outline: {
      type: Boolean
    },
    disable: {
      type: Boolean
    }
  }
}
</script>
<style lang="sass" scoped>
  // Estilos de fuente //
  .btn-xl
    font-size: 18px !important
    width: 156px
    height: 46px
  .btn-lg
    font-size: 16px !important
    width: 142px
    height: 42px
  .btn-md
    font-size: 14px !important
    width: 117px
    height: 38px
  .btn-sm
    font-size: 13px !important
    width: 106px
    height: 32px
  .btn-xs
    font-size: 12px !important
    width: 97px
    height: 28px

  // Estilos de color //
  .btn_primary1
    background: $secondary !important
    &:hover
      background: $secondary-dark !important
      transition: all .5s ease-in-out
  .btn_primary2
    background: $primary-dark2
    &:hover
      background: $primary-dark1 !important
      transition: all .5s ease-in-out
  .btn_secondary2
    background: #ffffff !important
    color: $gray !important
    &:hover
      background: #f1f1f1

  // Estilos de disabled //
  .btn-d
    background: #E4E4E4 !important
    color: #D1D1D1 !important
    &:hover
      background: #E4E4E4 !important
      color: #D1D1D1 !important

  // Estilos de outlined //
  .btn-f
    color: $primary !important
    background: #ffffff !important

  .outline-d
    background: #fff
    color: #D1D1D1 !important
</style>

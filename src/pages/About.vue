<template>
  <q-page padding>
    <p-btn size="xs" color="secondary2" label="Hola"/>
    <p-btn size="sm" color="secondary1" label="Hola"/>
    <p-btn color="primary1" label="Hola"/>
    <p-btn size = "lg" color="primary2" label="Hola" icon="add"/>
    <p-btn size = "xl" color="primary1" label="Hola" disable/>
  </q-page>
</template>

<script>
import PBtn from 'components/PBtn.vue'
export default {
  name: 'About',
  data () {
    return {}
  },
  components: {
    PBtn
  }
}
</script>

<template>
  <q-page padding>
    <div class="flex flex-center">
      <label class="text-h2 text-bold">Configuraciones</label>
    </div>
    <div class="t">
      <label class="text-h3 p-mb-lg">
        Perfil
      </label>
      <q-card dark bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Tu clave</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
           <q-btn class="q-mt-md q-mb-md"
           :loading="buttonLoading.loading1"
           :percentage="buttonLoading.percentage1"
           @click="startComputing(1)"
           label="Cambia tu clave"
           outline
           icon="keyboard_arrow_right"/>
            <br>
          <q-toggle
            left-label
            v-model="value"
            color="blue"
            label="Clave en transacciones"
          />
        </q-card-section>
      </q-card>

      <q-card dark bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Datos personales</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
           <q-input rounded color="white" label-color="white" outlined v-model="text" label="Correo electrónico" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      value: false,
      text: null,
      buttonLoading: {
        loading1: false,
        percentage1: 0
      }
    }
  },
  methods: {
    startComputing (id) {
      this.buttonLoading[`loading${id}`] = true
      this.buttonLoading[`interval${id}`] = setTimeout(() => {
        this.$router.push({ name: 'changePass' })
        this.buttonLoading[`loading${id}`] = false
      }, 2000)
    },

    beforeDestroy () {
      clearInterval(this.interval1)
      clearInterval(this.interval2)
    }
  }
}
</script>

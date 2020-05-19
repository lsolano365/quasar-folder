<template>
  <q-page>
    <custom-component-vue label="Custom"/>
     <div class="q-pa-xl">
       <q-carousel
        v-model="formData.slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        infinite
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
      <!--carousel-->
        <q-carousel-slide name="style" class="column no-wrap flex-center q-gutter-md">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            Bienvenido <span v-if="formData.name && formData.lastName"> {{ formData.name + ' ' + formData.lastName }} </span>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ formData.lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ formData.lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ formData.lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
      <!--inicio formulario -->
      <div class="row q-col-gutter-lg">
        <div class="col-md-6 col-sm-12">
          <validation-provider rules="required" v-slot="{ errors }">
            <q-input outlined v-model="formData.name" label="Nombres" />
            <span class="text-negative">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-md-6 col-sm-12 ">
          <validation-provider rules="required" v-slot="{ errors }">
            <q-input outlined v-model="formData.lastName" label="Apellidos" />
            <span class="text-negative">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12">
            <q-input
              outlined
              label="Descripción"
              v-model="formData.text"
              type="textarea"
            />
        </div>
         <q-select outlined v-model="formData.modelProfetion" :options="options" option-value="id" option-label="name" label="Profesión" />
         <div class="q-gutter-sm col-12">Se encuentra laborando?
      <q-radio dense v-model="formData.shape" val="si" label="Si" />
      <q-radio dense v-model="formData.shape" val="no" label="No" />
    </div>

    <div class="q-px-sm q-pt-sm col-12">
      Tu selección es: <strong>{{ formData.shape }}</strong>
    </div>
         <q-select outlined v-model="formData.modelTypeDocument" :options="optionsDocument" label="Tipo de documento" />

         <!--form-->
         <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md flex flex-center"
          >
          <q-input
            filled
            v-model="formData.name"
            label="Nombre *"
            hint="Nombres y apellidos"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor elige una opción']"
          />

          <q-input
            filled
            type="number"
            v-model="formData.age"
            label="Edad *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor elige tu edad',
              val => val > 0 && val < 100 || 'Por favor elige la edad real'
            ]"
          />

          <q-toggle v-model="formData.accept" label="Acepto la licencia y términos" />

          <div>
            <q-btn label="Enviar" type="submit" color="primary"/>
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
      <q-btn label="Salir" color="primary" @click="customBtn" class="glossy"/>

    </div>
  </q-page>
</template>

<script>
import { SessionStorage } from 'quasar'
import CustomComponentVue from './CustomComponent.vue'
export default {
  name: 'PageIndex',
  components: {
    CustomComponentVue
  },
  data () {
    return {
      formData: {
        slide: 'style',
        lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
        text: null,
        modelProfetion: 'Seleccionar opción',
        modelTypeDocument: 'Seleccionar tipo de documento',
        name: null,
        lastName: null,
        age: null,
        accept: false,
        shape: null,
        message: 'Hola'
      },
      options: [
        {
          id: 1,
          name: 'Administrador'
        },
        {
          id: 2,
          name: 'Programador'
        },
        {
          id: 3,
          name: 'Analista'
        },
        {
          id: 4,
          name: 'Docente'
        },
        {
          id: 5,
          name: 'Arquitecto'
        },
        {
          id: 6,
          name: 'Otros'
        }
      ],
      optionsDocument: [
        {
          value: 1,
          label: 'Tarjeta de identidad'
        },
        {
          value: 2,
          label: 'Cédula de ciudadanía'
        },
        {
          value: 3,
          label: 'Cédula extrangera'
        },
        {
          value: 4,
          label: 'Pasaporte'
        }
      ]
    }
  },
  created () {
    if (SessionStorage.has('formulario')) {
      this.formData = Object.assign({}, SessionStorage.getItem('formulario'))
    }
  },
  watch: {
    // cada vez que la pregunta cambie, esta función será ejecutada
    formData: {
      handler: function (newData, oldData) {
        SessionStorage.set('formulario', newData)
      },
      deep: true
    }
  },
  methods: {
    onSubmit () {
      if (!this.formData.accept) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Necesitas aceptar primero la licencia y términos'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Hecho!'
        })
        this.$q.loading.show()
        this.timer = setTimeout(() => {
          this.$q.loading.hide()
          this.timer = 0
        }, 2000)
      }
    },
    onClick () {
      // console
    },

    onReset () {
      this.formData.name = null
      this.formData.age = null
      this.formData.accept = false
      this.formData.text = null
      this.formData.lastName = null
      this.formData.message = 'hola'
      this.formData.shape = null
      this.formData.modelProfetion = 'Seleccionar opción'
      this.formData.modelTypeDocument = 'Seleccionar tipo de documento'
    },
    customBtn () {
      this.$q.dialog({
        title: 'Salir',
        message: 'Estás seguro de que deseas salir?',
        ok: {
          push: true,
          label: 'Descartar'
        },
        cancel: {
          push: true,
          color: 'negative',
          label: 'Guardar y Salir'
        },
        persistent: true
      }).onOk(() => {
        this.formData.name = null
        this.formData.age = null
        this.formData.accept = false
        this.formData.text = null
        this.formData.lastName = null
        this.formData.message = 'hola'
        this.formData.shape = null
        this.formData.modelProfetion = 'Seleccionar opción'
        this.formData.modelTypeDocument = 'Seleccionar tipo de documento'
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>

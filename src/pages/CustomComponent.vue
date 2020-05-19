<template>
    <div>
        <q-input class="q-pa-lg" :label="label" v-model="name"/>
    </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  data () {
    return {
      name: null
    }
  },
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

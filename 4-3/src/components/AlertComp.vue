<template>
  <div class="text-center">
    


    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      dismissible
      error
      @input="onClose"
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    },
    data: () => ({
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,
    }),
  }
</script>
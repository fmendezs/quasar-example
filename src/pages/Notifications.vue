<template>
  <q-page class="flex flex-center">
    <q-btn color="orange" icon="notification_important" label="Show Notifications" @click="notify" />
  </q-page>
</template>

<script>
export default {
  name: 'NotifyPage',
  methods: {
    notify (position) {
      const message = 'Hello World!!'
      this.$q.notify({ message, position: 'top-left' })
      this.$q.notify({ message, position: 'top-right' })
      this.$q.notify({ message, position: 'bottom-left' })
      this.$q.notify({ message, position: 'bottom-right' })
    }
  }
}
</script>

<style lang="stylus">
</style>

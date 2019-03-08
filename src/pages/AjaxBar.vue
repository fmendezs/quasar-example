<template>
  <q-page class="flex flex-center">
    <div class="q-pa-m">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />

      <q-btn color="orange" label="Show Ajax Bar" @click="trigger" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AjaxBarPage',
  methods: {
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, 3000)
    }
  }
}
</script>

<style lang="stylus">
</style>

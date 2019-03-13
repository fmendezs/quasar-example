<template>
  <q-page class="q-gutter-sm page-md">
    <q-card bordered class="bg-grey-2 standar-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/banner"  target="_blank" label="Alert"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-btn push color="orange" @click="show = true">Show</q-btn>
        <div class="q-pa-md q-gutter-md">
            <q-banner class="bg-primary text-white" v-if="show">
              <template v-slot:avatar>
                <q-icon name="signal_wifi_off" color="white" />
              </template>
              Unfortunately, the credit card did not go through, please try again.
              <template v-slot:action>
                <q-btn flat color="white" label="Dismiss" @click="show = !show" />
                <q-btn flat color="white" label="Update Credit Card" />
              </template>
            </q-banner>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AlertPage',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang="stylus">
  .standar-card
    margin-top  16px
    margin-left 16px
</style>

<template>
  <q-page class="q-gutter-sm page-md">
    <q-card bordered class="bg-grey-2 standar-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/options/transitions"  target="_blank" label="Transitions"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-btn push color="orange" @click="show = !show">Show/Hide</q-btn>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md q-gutter-md">
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div v-if="show" v-html="loremipsum" />
          </transition>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'TransitionsPage',
  data () {
    return {
      show: true,
      loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="stylus">
  .standar-card
    margin-top  16px
    margin-left 16px
</style>

<template>
  <q-drawer
    side='left'
    v-model="menuState"
    elevated
    content-class="bg-grey-3"
  >
    <q-list>
      <q-item-label header>Tutorial Menu</q-item-label>
      <q-item clickable tag="a" to="/buttons">
        <q-item-section avatar>
          <q-icon name="dns" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Buttons</q-item-label>
          <q-item-label caption>Show off the different ones, single, groups, dropdown</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="a" to="/badge">
        <q-item-section avatar>
          <q-icon name="looks_one" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Badges</q-item-label>
          <q-item-label caption>Allows you to create a small badge for adding information like contextual data</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="a" to="/notify">
        <q-item-section avatar>
          <q-icon name="notification_important" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Notificacions</q-item-label>
          <q-item-label caption>They are useful for alerting the user of an event and can even engage the user through actions.</q-item-label>
        </q-item-section>
      </q-item>
      <q-item tag="a" to="/ajaxbar">
        <q-item-section avatar>
          <q-icon name="sentiment_very_satisfied" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Ajax Bar</q-item-label>
          <q-item-label caption>Is a component which displays a loading bar  whenever an Ajax call is in progress.</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'app-menu',
  computed: {
    menuState: {
      get () {
        return this.$store.state.principal.menuOpen
      },
      set (val) {
        this.$store.commit('principal/setMenuOpen', val)
      }
    }
  },
  methods: {
    openURL
  }
}
</script>
<style>
</style>

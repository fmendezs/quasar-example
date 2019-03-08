<template>
  <q-header :reveal='true' class="header">
    <q-toolbar
      :glossy="$q.theme === 'mat'"
      :inverted="$q.theme === 'ios'"
    >
      <q-btn
        flat
        dense
        round
        @click="menuState = !menuState"
        aria-label="Menu"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-btn flat no-caps color="white" class="quasar-logo" type="a" to="/">
        <q-avatar>
          <img src="statics/quasar-logo.png" />
        </q-avatar>

        <q-toolbar-title>
          Quasar Tutorial SDC
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  name: 'app-bar',
  computed: {
    menuState: {
      get () {
        return this.$store.state.principal.menuOpen
      },
      set (val) {
        this.$store.commit('principal/setMenuOpen', val)
      }
    }
  }
}
</script>
<style lang="stylus">
  .quasar-logo img
    transform: rotate(0deg);
    transition: transform .8s ease-in-out;
  .header
    background: linear-gradient(145deg,#26a69a 12%,#014a88 45%);
</style>

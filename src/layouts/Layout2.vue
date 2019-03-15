<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

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

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <q-list>
          <q-item-label header>Left Drawer</q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar-framework.org/img/quasar-logo.png">
          </q-avatar>
          Quasar Tutorial SDC
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: true
    }
  }
}
</script>

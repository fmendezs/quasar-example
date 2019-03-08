<template>
  <q-layout view="hHh LpR fFf">
    <app-bar />
    <app-menu />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppBar from 'components/app-bar'
import AppMenu from 'components/app-menu'

export default {
  name: 'Principal',
  components: {
    AppBar,
    AppMenu
  }
}
</script>

<style>
</style>

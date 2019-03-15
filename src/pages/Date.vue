<template>
  <q-page class="flex flex-center page-md">
    <q-chip class="standar-margins" square icon="alarm" :label="currentDate" />
    <q-chip class="standar-margins" square icon="alarm" :label="tomorrow" />
    <q-chip class="standar-margins" square icon="alarm" :label="future10" />
    <q-chip class="standar-margins" square icon="alarm" :label="ago10" />
    <q-chip class="standar-margins" square icon="alarm" :label="currentTime" />
  </q-page>
</template>

<script>
import { date } from 'quasar'
let now = Date.now()
let tomorrow = date.addToDate(now, { days: 1 })
let future10 = date.addToDate(now, { days: 10 })
let ago10 = date.subtractFromDate(now, { days: 10 })

export default {
  name: 'PageDate',
  data () {
    return {
      currentDate: date.formatDate(now, 'MMM, Do YYYY'),
      currentTime: date.formatDate(now, 'HH:mm:ss'),
      tomorrow: date.formatDate(tomorrow, 'MMM, Do YYYY'),
      future10: date.formatDate(future10, 'MMM, Do YYYY'),
      ago10: date.formatDate(ago10, 'MMM, Do YYYY'),
      intervalTime: this.updateTime()
    }
  },
  methods: {
    updateTime () {
      this.interval = setInterval(() => {
        now = Date.now()
        this.currentTime = date.formatDate(now, 'HH:mm:ss')
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
  .page-md
    width 100%
  .standar-margins
    margin-top  16px
    margin-left 16px
</style>

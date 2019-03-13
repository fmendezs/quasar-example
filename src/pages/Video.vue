<template>
  <q-page class="q-gutter-sm page-md">
    <q-card bordered class="bg-grey-2 standar-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/video"  target="_blank" label="Video"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="q-pa-md q-gutter-md">
          <q-video
            src="https://www.youtube.com/embed/VQVNde78oVA"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'VideoPage'
}
</script>

<style lang="stylus">
  .standar-card
    margin-top  16px
    margin-left 16px
</style>

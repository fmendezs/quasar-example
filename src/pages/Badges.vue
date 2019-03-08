<template>
  <q-page class="q-gutter-sm page-md">
    <q-card bordered class="bg-grey-2 standar-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/badge"  target="_blank" label="Badges"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-btn push color="white" text-color="primary" label="Unread Mails">
            <q-badge color="orange" floating>22</q-badge>
          </q-btn>
          <q-btn dense color="purple" round icon="email" class="q-ml-md">
            <q-badge color="red" floating>4</q-badge>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'BadgePage'
}
</script>

<style lang="stylus">
  .standar-card
    margin-top  16px
    margin-left 16px
</style>

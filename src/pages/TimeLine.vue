<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Timeline Quasar
      </q-timeline-entry>

      <q-timeline-entry
        title="Quasar Doc"
        subtitle="February 27, 2019"
        side="left"
      >
        <div>
          Know a new VueJS framework.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Quasar Doc"
        subtitle="February 28, 2019"
        side="right"
      >
        <div>
          I created a base quasar project.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>March, 2019</q-timeline-entry>

      <q-timeline-entry
        title="Quasar Tutorial"
        subtitle="March 04, 2019"
        side="right"
      >
        <div>
          I began with a tutorial that Ronald sent to me about quasar framework.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Quasar Tutorial"
        subtitle="March 05, 2019"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          I learned how to use Vue components, Vue store and how Quasar do the routing page.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Quasar Tutorial"
        subtitle="March 06, 2019"
        side="right"
      >
        <div>
          I continued working on the rest of tutorial.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Quasar Tutorial"
        subtitle="March 12, 2019"
        side="left"
      >
        <div>
          I learned about parallax page, timeline component, use the Quasar layout builder, to use the Quasar utils and some other Vue Components.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: 'TimeLinePage',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>

<style lang="stylus">
  .standar-card
    margin-top  16px
    margin-left 16px
</style>

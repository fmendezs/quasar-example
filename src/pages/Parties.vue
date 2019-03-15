<template>
  <q-page class="q-gutter-sm page-md">
    <q-btn class="standar-card" color="primary" icon="add" label="Add Party" @click="dialogAdd = !dialogAdd" />
    <q-card bordered class="bg-grey-2 standar-card" v-for="party in parties" :key="party.id">
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-avatar>
            <img :src="party.img" />
          </q-avatar>
          {{party.description}}
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="dialogAdd" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h8">Add Party</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-dialog />
        </q-card-section>
        <q-card-section class="row items-center">
          <form @submit.prevent.stop="onSubmit" class="q-gutter-md">
            <q-input
              ref="description"
              filled
              v-model="party.description"
              label="Description *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              ref="image"
              filled
              v-model="party.img"
              label="url image *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <div>
              <q-btn label="Add" type="submit" color="primary"/>
              <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm" v-close-dialog />
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageParties',
  data () {
    return {
      party: [],
      dialogAdd: false
    }
  },
  computed: mapState({
    parties: state => state.layout2.parties
  }),
  methods: {
    addParty () {
      var newParty = this.party
      this.parties.push(newParty)
      this.party = []
      this.dialogAdd = false
    },
    onSubmit () {
      this.$refs.description.validate()
      this.$refs.image.validate()

      if (this.$refs.description.hasError || this.$refs.image.hasError) {
        this.formHasError = true
      } else {
        this.addParty()
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Added'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
  .page-md
    width 100%
  .standar-card
    margin-top  16px
    margin-left 16px
</style>

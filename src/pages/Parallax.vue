<template>
  <div>
    <q-parallax :height="350"
      src="statics/background.jpg"
    >
      <q-select
        v-model="lang"
        :options="langOptions"
        label="Quasar Language"
        dense
        borderless
        emit-value
        map-options
        options-dense
        style="min-width: 150px"
      />
      <h1 class="text-white">Parallax Page</h1>
    </q-parallax>
    <q-parallax :height="350">
      <template v-slot:media>
        <img src="statics/background.jpg">
      </template>

      <template v-slot:content="scope">
        <div class="q-pa-md">
          <q-btn-dropdown
            split
            class="glossy"
            color="teal"
            label="Folders"
          >
            <q-tooltip>Dropdown Button</q-tooltip>
            <q-list>
              <q-item clickable v-close-menu>
                <q-item-section avatar>
                  <q-avatar icon="folder" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                  <q-item-label caption>February 22, 2016</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-menu>
                <q-item-section avatar>
                  <q-avatar icon="assignment" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Vacation</q-item-label>
                  <q-item-label caption>February 22, 2016</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="q-pa-md">
          <q-btn color="orange" icon="notification_important" label="Show Notifications" @click="notify">
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
        </div>
        <div class="q-pa-md">
          <q-btn push color="primary" label="Handles click">
            <q-tooltip>Popover Button</q-tooltip>
            <q-popup-proxy>
              <q-banner>
                <template v-slot:avatar>
                  <q-icon name="signal_wifi_off" color="primary" />
                </template>
                You have lost connection to the internet. This app is offline.
              </q-banner>
            </q-popup-proxy>
          </q-btn>
        </div>
      </template>
    </q-parallax>
    <q-parallax :height="350"
      src="statics/background.jpg"
    >
      <div class="q-pa-md">
        <div class="cursor-pointer text-white">
          {{ label }}
          <q-popup-edit v-model="label">
            <q-input v-model="label" dense autofocus counter />
          </q-popup-edit>
        </div>
      </div>
      <div>
        <q-btn label="Dialog" color="primary" @click="confirm = true">
          <q-tooltip>Dialog Button</q-tooltip>
        </q-btn>
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-space />
              <q-btn icon="close" flat round dense v-close-dialog />
            </q-card-section>
            <q-card-section class="row items-center">
              <q-avatar icon="delete" color="primary" text-color="white" />
              <span class="q-ml-sm">Do you really want to delete your account?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" v-close-dialog />
              <q-btn flat label="Ok" color="primary" v-close-dialog />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn no-caps push color="primary" label="List BottomSheet" @click="show()">
          <q-tooltip>Sheet Button List</q-tooltip>
        </q-btn>
        <q-btn no-caps push color="white" text-color="primary" label="Grid BottomSheet" @click="show(true)">
          <q-tooltip>Sheet Button Grid</q-tooltip>
        </q-btn>
      </div>
      <div class="q-pa-md">
        <q-ajax-bar
          ref="bar"
          position="bottom"
          color="accent"
          size="10px"
          skip-hijack
        />

        <q-btn color="secondary" label="Ajax Bar" @click="trigger">
          <q-tooltip>Ajax Bar Tigger</q-tooltip>
        </q-btn>
      </div>
    </q-parallax>
    <q-parallax :height="350"
      src="statics/background.jpg"
    >
      <div class="q-pa-md q-gutter-md">
        <q-btn color="primary" @click="showTextLoading">
          <q-tooltip>Button Show inner loading</q-tooltip>
          Show Text Loading
        </q-btn>

        <q-card class="bg-grey-3 relative-position card-example">
          <q-card-section>
            <div class="text-h6">Lorem Ipsum</div>
          </q-card-section>

          <q-card-section>
            <transition
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <div v-show="showSimulatedReturnData">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
              </div>
            </transition>
          </q-card-section>

          <q-inner-loading :showing="visible">
            <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>
        </q-card>
      </div>
    </q-parallax>
    <q-parallax :height="350"
      src="statics/background.jpg"
    >
      <div class="q-pa-md">
        <q-linear-progress stripe rounded style="height: 20px" :value="progress2" color="warning" :class="progressBarClass" />
      </div>
      <div class="q-pa-md">
        <q-btn color="teal" @click="showLoading" label="Show Loading">
          <q-tooltip>Loading with message</q-tooltip>
        </q-btn>
      </div>
      <div class="q-pa-md">
        <div class="q-gutter-md row">
          <q-spinner
            color="teal"
            size="3em"
          />

          <q-spinner-audio
            color="teal"
            size="3em"
          />

          <q-spinner-ball
            color="teal"
            size="3em"
          />
        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script>
import languages from 'quasar/lang/index.json'

export default {
  name: 'PageParallax',
  data () {
    return {
      label: 'Popover Edit',
      confirm: false,
      visible: false,
      showSimulatedReturnData: false,
      progress2: 0.725,
      lang: this.$q.lang.isoName
    }
  },
  watch: {
    lang (lang) {
      // dynamic import, so loading on demand only
      import(`quasar/lang/${lang}`).then(lang => {
        this.$q.lang.set(lang.default)
      })
    }
  },
  methods: {
    notify (position) {
      const message = 'Hello World!!'
      this.$q.notify({ message, position: 'top-left', color: 'black' })
      this.$q.notify({ message, position: 'top-right', color: 'red' })
      this.$q.notify({ message, position: 'bottom-left', color: 'blue' })
      this.$q.notify({ message, position: 'bottom-right', color: 'green' })
    },
    showLoading () {
      this.$q.loading.show({
        message: 'Some important process is in progress. Hang on...'
      })

      // hiding in 3s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 3000)
    },
    showTextLoading () {
      this.visible = true
      this.showSimulatedReturnData = false
      setTimeout(() => {
        this.visible = false
        this.showSimulatedReturnData = true
      }, 3000)
    },
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, 3000)
    },
    show (grid) {
      this.$q.bottomSheet({
        message: 'Bottom Sheet message',
        grid,
        actions: [
          {
            label: 'Drive',
            img: 'https://cdn.quasar-framework.org/img/logo_drive_128px.png',
            id: 'drive'
          },
          {
            label: 'Keep',
            img: 'https://cdn.quasar-framework.org/img/logo_keep_128px.png',
            id: 'keep'
          },
          {
            label: 'Google Hangouts',
            img: 'https://cdn.quasar-framework.org/img/logo_hangouts_128px.png',
            id: 'calendar'
          },
          {
            label: 'Calendar',
            img: 'https://cdn.quasar-framework.org/img/logo_calendar_128px.png',
            id: 'calendar'
          },
          {},
          {
            label: 'Share',
            icon: 'share',
            id: 'share'
          },
          {
            label: 'Upload',
            icon: 'cloud_upload',
            color: 'primary',
            id: 'upload'
          },
          {},
          {
            label: 'John',
            avatar: 'https://cdn.quasar-framework.org/img/boy-avatar.png',
            id: 'john'
          }
        ]
      }).onOk(action => {
        console.log('Action chosen:', action.id)
      }).onCancel(() => {
        console.log('Dismissed')
      })
    }
  },
  computed: {
    progressBarClass () {
      return this.$q.screen.lt.md
        ? 'q-mt-sm progress-bar-mobile'
        : 'q-mt-sm progress-bar-full'
    }
  },
  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },
  created () {
    this.langOptions = languages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
</script>

<style lang="stylus">
  .text-white
    color white
  .card-example
    width 288px
    height 290px
  .progress-bar-full
    height 20px
    width 400px
  .progress-bar-mobile
    height 20px
    width 200px
</style>

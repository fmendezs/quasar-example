<template>
  <q-page class="q-gutter-sm page-md">
    <q-card bordered class="bg-grey-2 standar-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/button"  target="_blank" label="Standars Buttons"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="Standard" />
          <q-btn color="primary" label="Primary" />
          <q-btn color="secondary" label="Secondary" />
          <q-btn color="amber" glossy label="Amber" />
          <q-btn color="brown-5" label="Brown 5" />
          <q-btn color="deep-orange" glossy label="Deep Orange" />
          <q-btn color="purple" label="Purple" />
          <q-btn color="black" label="Black" />
        </div>
      </q-card-section>
    </q-card>

    <q-card bordered class="bg-grey-2 buttons-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/button"  target="_blank" label="Custom Color"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
          <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
          <q-btn flat style="color: #FF0080" label="Fuchsia Flat" />
          <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
          <q-btn outline style="color: goldenrod;" label="Goldenrod" />
        </div>
      </q-card-section>
    </q-card>

    <q-card bordered class="bg-grey-2 buttons-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/button-group"  target="_blank" label="Buttons Group"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="q-pa-md q-gutter-y-md column items-start">
          <q-btn-group push>
            <q-btn push label="First" icon="timeline" />
            <q-btn push label="Second" icon="visibility" />
            <q-btn push label="Third" icon="update" />
          </q-btn-group>

          <q-btn-group push>
            <q-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
            <q-btn color="amber" glossy text-color="black" push label="Second" />
            <q-btn color="orange" glossy text-color="black" push label="Third" />
          </q-btn-group>

          <q-btn-group outline>
            <q-btn outline color="brown" label="First" />
            <q-btn outline color="brown" label="Second" icon-right="watch_later" />
            <q-btn outline color="brown" label="Third" />
          </q-btn-group>

          <q-btn-group>
            <q-btn color="secondary" glossy label="First" />
            <q-btn color="secondary" glossy label="Second" />
            <q-btn color="secondary" glossy label="Third" />
            <q-btn color="secondary" glossy label="Fourth" />
          </q-btn-group>

          <q-btn-group>
            <q-btn color="accent" icon="timeline" />
            <q-btn color="accent" icon="visibility" />
            <q-btn color="accent" icon="update" />
          </q-btn-group>

          <q-btn-group rounded>
            <q-btn color="amber" rounded glossy icon="timeline" />
            <q-btn color="amber" rounded glossy icon="visibility" />
            <q-btn color="amber" rounded glossy icon-right="update" label="Update" />
          </q-btn-group>
        </div>
      </q-card-section>
    </q-card>

    <q-card bordered class="bg-grey-2 buttons-card">
      <q-card-section>
        <q-btn flat no-caps type="a" href="https://v1.quasar-framework.org/vue-components/button-dropdown"  target="_blank" label="Button Dropdown"/>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="q-pa-md">
          <q-btn-dropdown color="secondary" label="Dropdown Button">
            <q-list>
              <q-item clickable v-close-menu>
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-menu>
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-menu>
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ButtonsPage'
}
</script>

<style lang="stylus">
  .standar-card
    margin-top  16px
    margin-left 16px
  .buttons-card
    margin-left 16px
  .page-md
    width 100%
</style>

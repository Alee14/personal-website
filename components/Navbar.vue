<template>
    <div>
        <v-app-bar>
          <v-toolbar-title>Andrew Lee</v-toolbar-title>
          <v-spacer/>

          <!-- Mobile Only -->
          <span class="hidden-sm-and-up">
          <v-btn @click.stop="drawer = !drawer" icon><v-icon>mdi-menu</v-icon></v-btn>
          </span>
          <!-- Desktop + Tablets Only -->
          <v-toolbar-items class="hidden-xs-only">
            <v-btn :to="localePath('/')" text>{{ $t('HomeText') }}</v-btn>
            <v-btn :to="localePath('/blog')" text>{{ $t('BlogText') }}</v-btn>
            <v-btn :to="localePath('/projects')" text>{{ $t('ProjectsText') }}</v-btn>
            <v-btn :to="localePath('/videos')" text>{{ $t('VideosText') }}</v-btn>
            <!--<v-btn :to="localePath('#')" text>Alee Logo</v-btn>-->
            <v-divider class="mx-4" vertical></v-divider>
            <v-btn v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" text>{{ locale.name }}</v-btn>
          </v-toolbar-items>
        </v-app-bar>
      <v-alert type="info" dismissible>
        Hey there! This is just a temporary message saying that the french option is in beta! If you see some problems with my french, be sure to make a <a href="https://github.com/Alee14/personal-website" target="_blank">pull request or point it out on my issues page</a>!
      </v-alert>

        <!-- Mobile Only -->
        <v-navigation-drawer v-model="drawer" absolute temporary left>
          <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Andrew Lee</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item :to="localePath('/')">
              <v-list-item-content>
                <v-list-item-title>{{ $t('HomeText') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="localePath('/blog')">
              <v-list-item-content>
                <v-list-item-title>{{ $t('BlogText') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="localePath('/projects')">
              <v-list-item-content>
                <v-list-item-title>{{ $t('ProjectsText') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="localePath('/videos')">
              <v-list-item-content>
                <v-list-item-title>{{ $t('VideosText') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-list-item v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
              <v-list-item-content>
                <v-list-item-title>{{ locale.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style scoped>
a {
  color: white;
}
</style>

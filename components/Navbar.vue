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
            <v-btn v-for="item in items" :key="item.title" :to="localePath(item.link)" text>{{ $t(item.title) }}</v-btn>
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
            <v-list-item v-for="item in items" :key="item.title" :to="localePath(item.link)" link>
              <v-list-item-content>
                <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
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
      drawer: false,
      items: [
        { title: 'HomeText', link: '/' },
        { title: 'BlogText', link: '/blog' },
        { title: 'ProjectsText', link: '/projects' },
        { title: 'DownloadsText', link: '/downloads' },
        { title: 'VideosText', link: '/videos' }
        // { title: 'AleeLogoText', link: '/alee-logo' }
      ]
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

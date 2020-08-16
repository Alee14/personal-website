<template>
    <div>
        <v-app-bar>
          <v-toolbar-title>Andrew Lee</v-toolbar-title>
          <v-spacer/>

          <!-- Mobile Only -->
          <span class="hidden-sm-and-up">
          <v-btn @click.stop="drawer = !drawer">Menu</v-btn>
          </span>
          <!-- Desktop + Tablets Only -->
          <v-toolbar-items class="hidden-xs-only">
          <v-btn v-for="item in items" :key="item.title" :to="item.link" text>{{ item.title }}</v-btn>
          </v-toolbar-items>
        </v-app-bar>

        <!-- Mobile Only -->
        <v-navigation-drawer v-model="drawer" absolute temporary left>
          <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Blog', link: 'blog', icon: 'blog' },
        { title: 'Projects', link: 'projects', icon: 'projects' }
      ]
    }
  }
}
</script>

<style scoped>
</style>

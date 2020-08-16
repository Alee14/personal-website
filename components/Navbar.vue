<template>
    <div>
        <v-app-bar>
            <v-toolbar-title>Andrew Lee</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
            <v-btn to="/" text>
                Home
            </v-btn>
            <v-btn to="/blog" text>
                Blog
            </v-btn>
            <v-btn to="/projects" text>
                Projects
            </v-btn>
            </v-toolbar-items>
        </v-app-bar>
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
        { title: 'Blog', link: 'store', icon: 'blog' },
        { title: 'Projects', link: 'cart', icon: 'projects' }
      ]
    }
  }
}
</script>

<style scoped>
</style>

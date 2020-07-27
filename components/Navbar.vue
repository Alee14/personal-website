<template>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Andrew Lee</v-toolbar-title>
                <v-spacer/>
                <v-btn to="/" text>
                    Home
                </v-btn>
                <v-btn to="/blog" text>
                    Blog
                </v-btn>
                <v-btn to="/projects" text>
                    Projects
                </v-btn>
            </v-toolbar>
        </v-card>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>

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
                <v-spacer/>
                <v-btn href="https://github.com/Alee14" icon>
                    <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn href="https://twitter.com/Alee14498" icon>
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn href="https://www.youtube.com/channel/UCNRn4YDPCCWSEl3CT7eWorA" icon>
                    <v-icon>mdi-youtube</v-icon>
                </v-btn>
                <v-btn href="https://discord.gg/EFhRDqG" icon>
                    <v-icon>mdi-discord</v-icon>
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

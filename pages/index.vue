<template>
    <div>
        <v-card>
            <h1>Landing page here</h1>
        </v-card>
        <v-container>
            <v-card flat color="green darken-3" dark>
                <h1>About Me</h1>
                <p>Hello! I am Andrew Lee and I'm 15 years old. In 2014, I started my first youtube channel The Alee Diamond.</p>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'default',
  head: {
    title: 'Home',
    script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
  }

}
</script>

<style scoped>

</style>

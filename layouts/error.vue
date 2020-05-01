<template>
        <v-container>
            <h1 v-if="error.statusCode = 404">404 Error</h1>
            <h1 v-else>An error occurred</h1>
            <p>Hmm. Seems like this page either didn't exist...</p>
            <nuxt-link to="/">Home page</nuxt-link>
        </v-container>
</template>

<script>
export default {
  name: 'error',
  props: ['error']
}
</script>

<style scoped>

</style>

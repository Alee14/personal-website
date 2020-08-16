<template>
        <v-container>
            <h1 v-if="error.statusCode = 404" class="display-3 text-center">404 Error</h1>
            <h1 v-else>An error occurred</h1>
            <p class="text-center display-1">Hmm. Seems like this page either didn't exist or something went wrong...</p>
            <p class="text-center display-1"><nuxt-link to="/">Home</nuxt-link></p>
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

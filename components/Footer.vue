<template>
    <v-footer app class="font-weight-medium" color="green darken-3" dark>
        <v-col cols="12">
            <p class="text-center">Created using NuxtJS and Vuetify. Hosted on Netlify.</p>
            <p class="text-center"><strong>&copy; Copyright 2018-{{ new Date().getFullYear() }}, Andrew Lee.</strong>
            </p>
        </v-col>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>

<template>
    <div>
        <v-footer class="font-weight-medium" color="gray darken-3" dark>
            <v-col cols="12">
                <p class="text-center">&copy; Copyright 2018-{{ new Date().getFullYear() }} Andrew Lee. All rights reserved.</p>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>

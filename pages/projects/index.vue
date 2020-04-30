<template>
        <v-card>
                <header id="showcase">
                        <h1 class="display-3">Projects</h1>
                        <h1>My current and past projects goes here.</h1>
                </header>
        </v-card>
</template>

<script>
export default {
  name: 'projects',
  head: {
    title: 'Projects'
  }
}
</script>

<style scoped>
        #showcase {
                background-image:url("../../assets/img/landing_page.png");
                background-size: cover;
                background-position: center;
                height: 30vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 20px;
        }
</style>

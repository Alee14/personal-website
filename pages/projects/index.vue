<template>
        <v-card>
                <header id="showcase">
                        <h1 class="display-3 animated fadeIn">Projects</h1>
                        <h1 class="animated fadeIn">My current and past projects goes here.</h1>
                </header>
                <v-container>
                        <v-row>
                                <v-col cols="12">
                                        <v-card class="green darken-4">
                                                <v-card-title>Hello world</v-card-title>
                                                <v-card-text>Hello world 2</v-card-text>
                                        </v-card>
                                        <br>
                                        <v-card>
                                                <v-card-title>Hello world</v-card-title>
                                                <v-card-text>Hello world 2</v-card-text>
                                        </v-card>
                                </v-col>
                        </v-row>
                </v-container>
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
                text-shadow: 0px 0px 10px #000000;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 20px;
        }
</style>

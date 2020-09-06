<template>
        <v-card>
                <header id="showcase">
                        <h1 class="display-3 animate__animated animate__fadeIn">{{ $t('ProjectsText') }}</h1>
                        <h1 class="animate__animated animate__fadeIn">{{ $t('ProjectsSubtitle') }}</h1>
                </header>
                <v-container>
                        <v-row>
                                <v-col cols="12">
                                        <v-card class="green darken-4">
                                                <v-card-title>Alee Productions</v-card-title>
                                                <v-card-text>{{ $t('ProjectsALP') }}</v-card-text>
                                                <v-card-actions>
                                                        <v-btn text normal target="_blank" href="https://alee-productions.xyz">{{ $t('ProjectsWebsite') }}</v-btn>
                                                        <v-btn text normal target="_blank" href="https://github.com/aleeproductions">GitHub</v-btn>
                                                        <v-btn text normal target="_blank" href="https://twitter.com/aleeproductions">Twitter</v-btn>
                                                </v-card-actions>
                                        </v-card>
                                        <br>
                                        <v-card class="green darken-4">
                                                <v-card-title>AleeBot</v-card-title>
                                                <v-card-text>{{ $t('ProjectsAleeBot') }}</v-card-text>
                                                <v-card-actions>
                                                        <v-btn text normal target="_blank" href="https://github.com/aleeproductions/AleeBot">GitHub</v-btn>
                                                </v-card-actions>
                                        </v-card>
                                        <br>
                                        <v-card class="green darken-4">
                                                <v-card-title>DLMP3</v-card-title>
                                                <v-card-text>{{ $t('ProjectsDLMP3') }}</v-card-text>
                                                <v-card-actions>
                                                        <v-btn text normal target="_blank" href="https://github.com/Alee14/DLMP3">GitHub</v-btn>
                                                </v-card-actions>
                                        </v-card>
                                        <br>
                                        <v-card class="green darken-4">
                                                <v-card-title>First Website</v-card-title>
                                                <v-card-text>{{ $t('ProjectsFirstWebsite') }}</v-card-text>
                                                <v-card-actions>
                                                        <v-btn text normal target="_blank" href="https://alee14.github.io/first-website">{{ $t('ProjectsWebsite') }}</v-btn>
                                                </v-card-actions>
                                        </v-card>
                                        <br>
                                        <v-card class="green darken-4">
                                                <v-card-title>Weather Web Page</v-card-title>
                                                <v-card-text>{{ $t('ProjectsWWP') }}</v-card-text>
                                                <v-card-actions>
                                                        <v-btn text normal target="_blank" href="https://alee14.github.io/weather-website">{{ $t('ProjectsWebsite') }}</v-btn>
                                                </v-card-actions>
                                        </v-card>
                                        <br>
                                        <v-card class="green darken-4">
                                                <v-card-title>Raspberry Pi OS Menu</v-card-title>
                                                <v-card-text>{{ $t('ProjectsRPIMenu') }}</v-card-text>
                                                <v-card-actions>
                                                        <v-btn text normal target="_blank" href="https://github.com/Alee14/RPi-Menu">GitHub</v-btn>
                                                </v-card-actions>
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

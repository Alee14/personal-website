<template>
  <div>
    <header id="showcase">
      <h1 class="display-3 animate__animated animate__fadeIn">{{ $t('DownloadsText') }}</h1>
      <h1 class="animate__animated animate__fadeIn">{{ $t('DownloadsSubtitle') }}</h1>
    </header>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="green darken-4">
            <v-card-title>Philip Adams Software Archive</v-card-title>
            <v-card-text>The ultimate software collection of Philip Adams' software.</v-card-text>
            <v-card-actions>
              <v-btn text normal href="/downloads/osft-software-archive">More Information</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  head: {
    title: 'Downloads'
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

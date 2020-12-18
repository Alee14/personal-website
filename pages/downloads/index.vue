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
            <v-card-text>This is the ultimate software collection of Philip Adams' software. (OSFirstTimer, 12padams, AstralPhaser, ShiftOS).<br>These software require .NET Framework 3.5, 4.0 and/or 4.5 to function.<br>Warning some of the software in this pack has a jumpscare, and if you have epilepsy please be cautious with this pack.<br>Also be sure to disable the antivirus if you want to try out Mitosis.</v-card-text>
            <v-card-actions>
              <v-btn text normal href="/uploads/OSFT-Software-Archive.tar.gz">Download</v-btn>
              <v-btn text normal href="/uploads/OSFT-Software-Archive.tar.gz.md5">Download MD5</v-btn>
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

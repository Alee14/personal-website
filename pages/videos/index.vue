<template>
  <div>
    <v-card>
      <header id="showcase">
        <h1 class="display-3 animate__animated animate__fadeIn">{{ $t('VideosText') }}</h1>
        <h1 class="animate__animated animate__fadeIn">{{ $t('VideosSubtitle') }}</h1>
      </header>
    </v-card>
    <v-container>
      <rssapp-wall id="0YnuB7ETra9EU2An"></rssapp-wall><script src="https://widget.rss.app/v1/wall.js" type="text/javascript" async></script>
      <br/>
      <div class="text-center">
        <v-btn color="green" align="center" href="https://www.youtube.com/user/Andrew14Lee/videos">{{ $t('VideosButton') }}</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  head: {
    title: 'Videos'
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

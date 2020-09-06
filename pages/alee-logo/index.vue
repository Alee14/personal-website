<template>
  <div>
    <v-card>
      <header id="showcase">
        <h1 class="display-3 animate__animated animate__fadeIn">{{ $t('AleeLogoText') }}</h1>
        <h1 class="animate__animated animate__fadeIn">{{ $t('AleeLogoSubtitle') }}</h1>
      </header>
    </v-card>
    <v-img src="../../assets/img/alee-logo/logo-banner.png" max-width="300" max-height="300"></v-img>
  </div>
</template>

<script>
export default {
  name: 'index'
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

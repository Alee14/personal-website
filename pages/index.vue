<template>
    <div>
        <div class="landing-page">
            <v-card>
                <header id="showcase" class="animate__animated animate__fadeIn">
                    <v-img :src="require('../assets/img/Alee.png')" max-height="200px" max-width="200px" class="animate__animated animate__fadeIn" />
                    <br/>
                    <h1 class="display-4 animate__animated animate__zoomIn">{{ $t('WelcomeTitle') }}</h1>
                    <br/>
                    <h1 class="display-1 animate__animated animate__zoomIn">{{ $t('WelcomeSubtitle') }}</h1>
                </header>
            </v-card>
        </div>
        <v-container>
            <div class="about">
                 <h1>{{ $t('AboutMe') }}</h1>
                        <p><b>{{ $t('AboutMeText') }}</b></p>
                        <h1>{{ $t('PlatformsTitle') }}</h1>
                        <v-btn target="_blank" href="https://www.youtube.com/channel/UCNRn4YDPCCWSEl3CT7eWorA" color="red">
                          <v-icon>mdi-youtube</v-icon>&nbsp;Youtube
                        </v-btn>
                        <v-btn target="_blank" href="https://twitter.com/Alee14498" color="light-blue">
                          <v-icon>mdi-twitter</v-icon>&nbsp;Twitter
                        </v-btn>
                        <v-btn target="_blank" href="https://discord.gg/EFhRDqG" color="#2C2F33">
                            <v-icon>mdi-discord</v-icon>&nbsp;Discord Server
                        </v-btn>
                        <v-btn target="_blank" href="https://github.com/Alee14" color="black">
                            <v-icon>mdi-github</v-icon>&nbsp;GitHub
                        </v-btn>
                        <v-btn target="_blank" href="https://lbry.tv/@Alee:4">
                            <v-icon>mdi-video</v-icon>&nbsp;IBRY
                        </v-btn>
                        <v-btn target="_blank" href="https://www.instagram.com/alee14498" color="pink">
                            <v-icon>mdi-instagram</v-icon>&nbsp;Instagram
                        </v-btn>
                        <v-btn target="_blank" href="https://www.reddit.com/user/alee1449" color="orange darken-3">
                            <v-icon>mdi-reddit</v-icon>&nbsp;Reddit
                        </v-btn>
                        <h1>{{ $t('TimelineTitle') }}</h1>
                        <p>{{ $t('TimelineContent2014') }}<br>{{ $t('TimelineContent2015') }}<br>{{ $t('TimelineContent2016') }}<br>{{ $t('TimelineContent2017') }}</p>
                        <h1>{{ $t('ProgrammingLanguagesTitle') }}</h1>
                        <ul>
                            <li>C#</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>Vue</li>
                            <li>Python</li>
                        </ul>
                        <h1>{{ $t('FavouriteGamesTitle') }}</h1>
                        <ul>
                          <li>Splatoon 2</li>
                          <li>Minecraft</li>
                          <li>Animal Crossing: New Horizons</li>
                          <li>Super Mario Maker 2</li>
                          <li>Super Mario Odyssey</li>
                          <li>Mario & Luigi Bowser's Inside Story</li>
                          <li>Club Penguin: Elite Penguin Force</li>
                          <li>Software Inc</li>
                          <li>PC Building Simulator</li>
                          <li>Hacknet</li>
                        </ul>
              <h1>{{ $t('BadgesTitle') }}</h1>
              <img src="http://www.hackthebox.eu/badge/image/391735" alt="Hack The Box">
              <img src="https://tryhackme-badges.s3.amazonaws.com/Alee.png" alt="TryHackMe">
            </div>
          <div class="communities">
            <h1>{{ $t('CommunitiesTitle') }}</h1>
            <ul>
              <li><a href="https://www.bnbdiscord.net">bits & Bytes</a></li>
              <li><a href="https://discord.gg/nTQM7h4">TheEdgeNK</a></li>
            </ul>
          </div>
            <div class="aleepc-specs">
                <h1>{{ $t('AleePCPartsTitle') }}</h1>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>{{ $t('AleePCPartsTypeText') }}</th>
                            <th>{{ $t('AleePCPartsNameText') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ $t('AleePCPartsCPU') }}</td>
                            <td>AMD - Ryzen 3 2200G 3.5 GHz Quad-Core Processor</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsCPUCooler') }}</td>
                            <td>Cooler Master - Hyper T2 54.8 CFM Sleeve Bearing CPU Cooler</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsMemory') }}</td>
                            <td>Corsair - Vengeance LPX 16 GB (2 x 8 GB) DDR4-2400</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsMainStorage') }}</td>
                            <td>Western Digital Blue 250 GB M.2-2280 Solid State Drive</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsSecondStorage') }}</td>
                            <td>Western Digital Blue 2 TB 3.5" 5400RPM Internal Hard Drive</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsMotherboard') }}</td>
                            <td>ASRock - B450M-HDV Micro ATX AM4</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsCase') }}</td>
                            <td>Rosewill - FBM-X1 MicroATX Mini Tower Case</td>
                        </tr>
                        <tr>
                            <td>{{ $t('AleePCPartsPowerSupply') }}</td>
                            <td>EVGA - 500 W 80+ Certified ATX Power Supply</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </div>
            <div class="credits">
                <h1>{{ $t('CreditsTitle') }}</h1>
                <p>{{ $t('CreditsGPLText') }} <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GPL-3.0</a>.</p>
              <p>{{ $t('CreditsContent1') }} <a href="https://vuejs.org" target="_blank">Vue.JS</a>, <a href="https://nuxtjs.org" target="_blank">NuxtJS</a> & <a href="https://vuetifyjs.com" target="_blank">Vuetify</a>. {{ $t('CreditsContent2') }} <a href="https://netlify.com" target="_blank">Netlify</a>.</p>
            </div>
            <div class="contact">
                <h1>{{ $t('ContactMeTitle') }}</h1>
                <p>{{ $t('ContactMeText') }} <a href="mailto:andrew@alee14.me">andrew@alee14.me</a>.</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'default',
  head: {
    title: 'Home',
    script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
  }

}
</script>

<style scoped>
    #showcase {
        background-image:url("../assets/img/landing_page.png");
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        text-shadow: 0px 0px 10px #000000;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
    }
</style>

<template>
    <div>
        <div class="landing-page">
            <v-card>
                <header id="showcase" class="animate__animated animate__fadeIn">
                    <v-img :src="require('../assets/img/Alee.png')" max-height="200px" max-width="200px" class="animate__animated animate__fadeIn" />
                    <br/>
                    <h1 class="display-4 animate__animated animate__zoomIn">Hello, I'm Andrew Lee!</h1>
                    <br/>
                    <h1 class="display-1 animate__animated animate__zoomIn">Welcome to my personal website.</h1>
                </header>
            </v-card>
        </div>
        <v-container>
            <div class="about">
                 <h1>About Me</h1>
                        <p><b>Hello, I'm Andrew Lee and I'm currently 16 years old. I like to program and play some games sometimes.</b></p>
                        <h1>Platforms</h1>
                        <v-btn target="_blank" href="https://discord.gg/EFhRDqG" icon>
                            <v-icon>mdi-discord</v-icon>
                        </v-btn>
                        <v-btn target="_blank" href="https://github.com/Alee14" icon>
                            <v-icon>mdi-github</v-icon>
                        </v-btn>
                        <v-btn target="_blank" href="https://lbry.tv/@Alee:4" icon>
                            <v-icon>mdi-video</v-icon>
                        </v-btn>
                        <v-btn target="_blank" href="https://twitter.com/Alee14498" icon>
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn target="_blank" href="https://www.youtube.com/channel/UCNRn4YDPCCWSEl3CT7eWorA" icon>
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                        <v-btn target="_blank" href="https://www.instagram.com/alee14498" icon>
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn target="_blank" href="https://www.reddit.com/user/alee1449" icon>
                            <v-icon>mdi-reddit</v-icon>
                        </v-btn>
                        <h1>Timeline</h1>
                        <p> 2014: Created my first YouTube channel The Alee Diamond.<br>
                            2015: First got into programming and learned HTML and Batch.<br>
                            2016: Learned a bit of VB, The Alee Diamond rebranded into Andrew Lee and AleeTechyPlays is born.<br>
                            2017: Learned JavaScript and C#.</p>
                        <h1>Programming Languages</h1>
                        <ul>
                            <li>C#</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>Vue</li>
                            <li>Python</li>
                        </ul>
                        <h1>Favorite Games</h1>
                        <ul>
                            <li>Splatoon 2</li>
                            <li>Animal Crossing: New Horizons</li>
                            <li>Minecraft</li>
                            <li>Super Mario Maker 2</li>
                            <li>Super Mario Odyssey</li>
                            <li>PC Building Simulator</li>
                            <li>Software Inc</li>
                            <li>Hacknet</li>
                        </ul>
            </div>
            <div class="aleepc-specs">
                <h1>AleePC Parts</h1>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>Part Type</th>
                            <th>Part Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CPU</td>
                            <td>AMD - Ryzen 3 2200G 3.5 GHz Quad-Core Processor</td>
                        </tr>
                        <tr>
                            <td>CPU Cooler</td>
                            <td>Cooler Master - Hyper T2 54.8 CFM Sleeve Bearing CPU Cooler</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>Corsair - Vengeance LPX 16 GB (2 x 8 GB) DDR4-2400</td>
                        </tr>
                        <tr>
                            <td>Main Storage</td>
                            <td>Western Digital Blue 250 GB M.2-2280 Solid State Drive</td>
                        </tr>
                        <tr>
                            <td>Second Storage</td>
                            <td>Western Digital Blue 2 TB 3.5" 5400RPM Internal Hard Drive</td>
                        </tr>
                        <tr>
                            <td>Motherboard</td>
                            <td>ASRock - B450M-HDV Micro ATX AM4</td>
                        </tr>
                        <tr>
                            <td>Case</td>
                            <td>Rosewill - FBM-X1 MicroATX Mini Tower Case</td>
                        </tr>
                        <tr>
                            <td>Power Supply</td>
                            <td>EVGA - 500 W 80+ Certified ATX Power Supply</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </div>
            <div class="credits">
                <h1>Credits</h1>
                <p>Website is licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0</a>.</p>
                <p>Created using <a href="https://vuejs.org">Vue.JS</a>, <a href="https://nuxtjs.org">NuxtJS</a> and <a href="https://vuetifyjs.com">Vuetify</a>. Hosted on <a href="https://netlify.com">Netlify</a>.</p>
            </div>
            <div class="contact">
                <h1>Contact Me</h1>
                <p>If you want to ask me questions or just want to contact me. Contact me at <a href="mailto:andrew@alee14.me">andrew@alee14.me</a>.</p>
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

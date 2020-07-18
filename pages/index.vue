<template>
    <div>
        <div class="landing-page">
            <v-card>
                <header id="showcase" class="animated fadeIn">
                    <v-img :src="require('../assets/img/Alee.png')" max-height="200px" max-width="200px" class="animated fadeIn" />
                    <br/>
                    <h1 class="display-4 animated zoomIn">Hello, I'm Andrew Lee!</h1>
                    <br/>
                    <h1 class="display-1 animated zoomIn">Welcome to my personal website.</h1>
                </header>
            </v-card>
        </div>
        <v-container>
            <div class="about">
                <v-card flat color="green darken-3" dark>
                    <v-container>
                        <h1>About Me</h1>
                        <p><b>Hello, I'm Andrew Lee and I'm currently 16 years old.</b></p>
                        <h1>Timeline</h1>
                        <p> 2014: Created my first YouTube channel The Alee Diamond<br>
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
                        </ul>
                        <h1>My favorite games</h1>
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
                    </v-container>
                </v-card>
            </div>
            <div class="projects">
                <!-- This might get removed -->
            </div>
            <div class="blog">
                <h1>Blog here</h1>
            </div>
            <div class="aleepc-specs">
                <h1>AleePC Parts</h1>
                <v-simple-table>
                    <tr>
                        <th>Part Type</th>
                        <th>Part Name</th>
                    </tr>
                    <tr>
                        <td>CPU</td>
                        <td>AMD - Ryzen 3 2200G 3.5 GHz Quad-Core Processor</td>
                    </tr>
                    <tr>
                        <td>CPU Cooler</td>
                        <td>Cooler Master - Hyper T2 54.8 CFM Sleeve Bearing CPU Cooler</td>
                    </tr>
                    <tr>
                        <td>Motherboard</td>
                        <td>ASRock - B450M-HDV Micro ATX AM4</td>
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
                        <td>Case</td>
                        <td>Rosewill - FBM-X1 MicroATX Mini Tower Case</td>
                    </tr>
                    <tr>
                        <td>Power Supply</td>
                        <td>EVGA - 500 W 80+ Certified ATX Power Supply</td>
                    </tr>
                </v-simple-table>
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
    }
</style>

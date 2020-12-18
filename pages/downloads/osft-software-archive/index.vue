<template>
  <div>
    <header id="showcase">
      <h1 class="display-3 animate__animated animate__fadeIn">Philip Adams Software Archive</h1>
      <h1 class="animate__animated animate__fadeIn">The ultimate software collection of Philip Adams' software.</h1>
    </header>
    <v-container>
      <v-card class="green darken-4">
        <v-col>
          <h1>Description</h1>
          <p>These software require .NET Framework 3.5, 4.0 and/or 4.5 to function.</p>
          <p>Warning some of the software in this pack has a jumpscare, and if you have epilepsy please be cautious with this pack.</p>
          <p>Also be sure to disable the antivirus if you want to try out Mitosis.</p>
          <p>This pack includes the following:</p>
          <ul>
            <li>Artpad (from ShiftOS)</li>
            <li>Averager</li>
            <li>Board Game Maker</li>
            <li>Bouncing Ball Physics 0.3</li>
            <li>Chebinect</li>
            <li>Chrono Machine 0.9.3</li>
            <li>Colors</li>
            <li>Dark OS Studio</li>
            <li>Digging</li>
            <li>Draw</li>
            <li>Dropper</li>
            <li>Explore 0.3.7</li>
            <li>File Viewer (Warning jumpscare)</li>
            <li>File Wars</li>
            <li>"funny nana and grampa sounds version 1.1"</li>
            <li>Guess The Number</li>
            <li>Histacom 1.8.5 (Epliespy warning)</li>
            <li>HTMLive</li>
            <li>IIR (Interactive Infinite Road)</li>
            <li>Infinijump 0.1</li>
            <li>Mitosis 0.6</li>
            <li>OSFirstTimer Blue Screen (Warning jumpscare)</li>
            <li>Paper Math 2D</li>
            <li>Philip's Mario Game</li>
            <li>Phone Simulator 0.4</li>
            <li>Picture Generator</li>
            <li>Pixel Physics 0.3</li>
            <li>Road Simulator 0.4</li>
            <li>RPG Map Maker</li>
            <li>ShiftOS 0.0.8 (Epliespy warning)</li>
            <li>Theme Test</li>
            <li>Thoto 0.3</li>
            <li>Time Machine 0.4</li>
            <li>Typewriter</li>
            <li>Vending Machine</li>
            <li>Visual Sound (Ear blast warning lower the volume)</li>
            <li>Zeon OS 0.2</li>
          </ul>
        </v-col>
        <v-card-actions>
          <v-btn text normal href="/uploads/OSFT-Software-Archive.tar.gz">Download Tar.GZ</v-btn>
          <v-btn text normal href="/uploads/OSFT-Software-Archive.tar.gz.md5">Download MD5</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  head: {
    title: 'Philip Adams Software Archive'
  }
}
</script>

<style scoped>
#showcase {
  background-image:url("../../../assets/img/landing_page.png");
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

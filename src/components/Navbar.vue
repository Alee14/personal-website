<template>
  <nav>
    <button class="nav-toggle" aria-label="toggle navigation" @click="toggleNav">
      <span class='hamburger'></span>
    </button>
    <ul class="nav-list">
      <li><a href="/" class="nav-link" @click="toggleNav">Home</a></li>
      <li><a href="/projects" class="nav-link" @click="toggleNav">Projects</a></li>
      <li><a href="/downloads" class="nav-link" @click="toggleNav">Downloads</a></li>
      <li><a href="/blog" class="nav-link" @click="toggleNav">Blog</a></li>
      <li><a href="/guestbook" class="nav-link" @click="toggleNav">Guestbook</a></li>
      <li><a href="/contacts" class="nav-link" @click="toggleNav">Contacts</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      document.querySelector('.nav-toggle').classList.toggle('active');
      document.querySelector('.nav-list').classList.toggle('show');
    }
  }
}
</script>

<style scoped>
@import "../styles/Navbar.css";
</style>

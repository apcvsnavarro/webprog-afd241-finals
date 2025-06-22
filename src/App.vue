<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';
import Guestbook from './components/Guestbook.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';

import { ref, onMounted } from 'vue'

const isMuted = ref(true)
const bgm = ref(null)

const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (bgm.value) {
    bgm.value.muted = isMuted.value
    if (!isMuted.value) {
      bgm.value.play()
    }
  }
}

// Optionally, autoplay muted on mount (for browser compatibility)
onMounted(() => {
  if (bgm.value) {
    bgm.value.muted = isMuted.value
    bgm.value.play().catch(() => {})
  }
})


const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
 
<template>
  
    <div>
    <!-- Music Controls -->
    <button @click="toggleMute" class="music-btn">
      <span v-if="isMuted">🔇</span>
      <span v-else>🔊</span>
    </button>
    <audio
      ref="bgm"
      src="/welcometomy.mp3"
      loop
      autoplay
      :muted="isMuted"
    ></audio>
    <!-- Rest of your site -->
    <NavBar />
    <div class="main-container">
      <!-- Sections -->
    </div>
  </div>
    <video autoplay muted loop playsinline class="background-video">
      <source src="/robin1440.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <nav class="navbar">
    <div class="logo">WEBPROG-FINALS</div>
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
      ☰
    </button>
    <ul :class="['nav-links', { open: menuOpen }]">
      <li><a href="#about" @click="closeMenu">About</a></li>
      <li><a href="#guestbook" @click="closeMenu">Guestbook</a></li>
      <li><a href="#gallery" @click="closeMenu">Gallery</a></li>
      <li><a href="#skills" @click="closeMenu">Skills</a></li>
      <li><a href="#projects" @click="closeMenu">Projects</a></li>
      <li><a href="#contact" @click="closeMenu">Contact</a></li>
    </ul>
    </nav>

    <div class="content">
      <section class="hero">
        <img src="/angelo5.jpg" alt="Your Avatar" class="avatar" />
        <h1>Welcome to Angelo's World!</h1>
        <p class="tagline">Renew your definition~<br>
        World so high, let me show~<br>
        And hear my declaration~<br>
        "No more ties"<br>
        -Robin, Honkai Star Rail</p>
      </section>

      <About />
      <Guestbook />
      <Gallery />
      <Skills />
      <Projects />
      <Contact />

    </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(42, 26, 77, 0.95);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  position: relative;
  z-index: 10;
}

.logo {
  color: #d9a9e3;
  font-weight: bold;
  font-size: 1.5rem;
}

/* Desktop nav links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  transition: transform 0.3s ease-in-out;
}

.nav-links li a {
  color: #d9a9e3;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-links li a:hover {
  color: #f0f0f5;
}

/* Hamburger button hidden on desktop */
.hamburger {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #d9a9e3;
  cursor: pointer;
}

/* Mobile styles */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    position: fixed;
    top: 60px; /* height of navbar */
    right: 0;
    background: rgba(42, 26, 77, 0.95);
    height: calc(100vh - 60px);
    width: 200px;
    flex-direction: column;
    transform: translateX(100%);
    padding: 1rem;
    gap: 1rem;
    box-shadow: -2px 0 8px rgba(0,0,0,0.3);
  }
  .nav-links.open {
    transform: translateX(0);
  }
  .nav-links li a {
    font-size: 1.2rem;
  }
}
</style>

<style>
.music-btn {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  background: rgba(42, 26, 77, 0.85);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #d9a9e3;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #bfa6e8;
  transition: background 0.2s;
}
.music-btn:hover {
  background: #bfa6e8;
  color: #2a1a4d;
}
#app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;       /* center horizontally */
  /* justify-content: center; */ /* Uncomment if you want vertical centering */
  padding: 1rem;
  box-sizing: border-box;
}

.background-video {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
  filter: brightness(0.6);
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 1rem;
  background: rgba(42, 26, 77, 0.95);
  border-radius: 12px;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
}

.navbar a {
  color: #d9a9e3;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.2s;
}

.navbar a:hover {
  color: #f0f0f5;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;  /* center all child sections horizontally */
  width: 100%;
  max-width: 900px;
  gap: 2rem;
  box-sizing: border-box;
  padding-bottom: 3rem;
}

.hero {
  text-align: center;
  width: 100%;
  background: rgba(42, 26, 77, 0.9);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #BFA6E8;
}

.avatar {
  width: 140px;
  border-radius: 50%;
  border: 3px solid #D9A9E3;
  box-shadow: 0 0 15px #D9A9E3;
  margin-bottom: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #F0F0F5;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  color: #D9A9E3;
  text-shadow: 0 0 8px #BFA6E8;
}

.tagline {
  font-size: 1.2rem;
  color: #E6D9F7;
}

/* Section styling for About, Skills, Projects, Guestbook, Contact components */
section {
  width: 100%;
  background: rgba(42, 26, 77, 0.9);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #BFA6E8;
}
</style>
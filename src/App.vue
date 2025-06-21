<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Guestbook from './components/Guestbook.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';

</script>

<template>
  <div id="app">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/robin1440.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <nav class="navbar">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#guestbook">Guestbook</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="content">
      <section class="hero">
        <img src="/withrobin.jpg" alt="Your Avatar" class="avatar" />
        <h1>Welcome to Angelo's Space!</h1>
        <p class="tagline">Aspiring developer & gaming enthusiast.</p>
      </section>

      <About />
      <Skills />
      <Projects />
      <Guestbook />
      <Contact />
    </div>
  </div>
</template>
<style>
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
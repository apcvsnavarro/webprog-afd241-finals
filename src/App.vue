<template>
  <nav class="navbar">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#guestbook">Guestbook</a>
    <a href="#contact">Contact</a>
  </nav>
  <div id="app">
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
  <div id="app">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/robin1440.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <!-- Your profile and other components here -->
    </div>
  </div>
</template>

<script setup>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Guestbook from './components/Guestbook.vue'
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: linear-gradient(135deg, #2A1A4D, #4B367C);
  color: #F0F0F5;
  min-height: 100vh;
}

#app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: white;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: rgba(42, 26, 77, 0.95);
  padding: 1rem 0;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.navbar a {
  color: #D9A9E3;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}
.navbar a:hover {
  color: #F0F0F5;
}

.background-video {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  pointer-events: none; /* So clicks pass through */
  filter: brightness(0.6); /* Optional: darken video for readability */
}

.content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.profile {
  text-align: center;
  margin-bottom: 3rem;
}

.avatar {
  width: 140px;
  border-radius: 50%;
  border: 3px solid #D9A9E3;
  box-shadow: 0 0 15px #D9A9E3;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
  background: rgba(42, 26, 77, 0.9);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #BFA6E8;
}

@media (max-width: 600px) {
  #app {
    padding: 1rem;
  }
  .avatar {
    width: 90px;
  }
  section {
    padding: 1rem;
  }
}

.tagline {
  font-size: 1.2rem;
  color: #E6D9F7;
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

p {
  font-size: 1.2rem;
  color: #E6D9F7;
  margin-bottom: 1rem;
}

a {
  color: #D9A9E3;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

a:hover {
  border-color: #F0F0F5;
  color: #F0F0F5;
}

.guestbook {
  background: rgba(42, 26, 77, 0.9);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #BFA6E8;
}

form input,
form textarea {
  background: #3B2A6D;
  border: 1px solid #6E57A4;
  color: #F0F0F5;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}

form input:focus,
form textarea:focus {
  border-color: #D9A9E3;
  outline: none;
  box-shadow: 0 0 8px #D9A9E3;
}

button {
  background: #D9A9E3;
  color: #2A1A4D;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #BFA6E8;
  color: #fff;
}

ul li {
  border-bottom: 1px solid #6E57A4;
  padding: 0.5rem 0;
  color: #E6D9F7;
}
</style>

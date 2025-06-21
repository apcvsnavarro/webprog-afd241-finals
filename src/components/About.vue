<template>
  <section class="about" id="about">
    <h2>About Me</h2>
    <p>
      Hi! I'm Angelo, currently studying web programming and passionate about building modern, interactive websites with Vue.js.
      I enjoy creating this Robin from Honkai Star Rail themed project and exploring new web technologies.
      This site is hosted on Vercel and features a live guestbook powered by Supabase.
    </p>
    <p>
      My goal is to design engaging, responsive experiences for all users—whether on desktop, tablet, or mobile.
      Feel free to explore, leave a message, or connect!
    </p>
  </section>
</template>

<style scoped>
.about {
  background: rgba(75, 54, 124, 0.85);
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 2px 12px #bfa6e8;
  margin-bottom: 2rem;
  color: #f0f0f5;
}

.about h2 {
  color: #d9a9e3;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.about p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 0.8rem;
}

@media (max-width: 600px) {
  .about {
    padding: 1rem;
  }
  .about h2 {
    font-size: 1.5rem;
  }
  .about p {
    font-size: 1rem;
  }
}
</style>

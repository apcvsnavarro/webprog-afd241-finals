<template>
  <section class="about" id="about">
    <h2>About Me</h2>
    <p>
      Hi I'm Angelo, I am a third-year (irregular) student at Asia Pacific College, majoring in Information Technology with a focus on Mobile and Internet technologies. I have been passionate about computers since I was young.</p> 
      <p>I enjoyed creating this Robin from Honkai Star Rail themed project and exploring new web technologies.
      This site is hosted on Vercel and features a live guestbook powered by Supabase.
    </p>
    <p>
      My goal is to design engaging, responsive experiences for all users—whether on desktop, tablet, or mobile.
      Feel free to explore, leave a message, or connect!
    </p>
    <h2>Education & Achievements</h2>
    <p>-Graduated Senior High School at AMA Makati</p>
    <p>-Currently studying Information Technology: Mobile/Internet at Asia Pacific College</p>
    <h2>IT Experience</h2>
    <p>-Built my first computer at age 13</p>
    <p>-Helped a lot of friends build and troubleshoot their PCs throughout the years</p>
    <p>-Completed work immersion at Development Bank of the Philippines (DBP) Head Office, working with the IT team on the bank's website</p>
    <h2>Goals & Dreams</h2>
    <p>-My goal is to be successful no matter what obstacles I encounter. I dream of visiting Japan or South Korea at least once in my life.</p>
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

<template>
  <section class="projects" id="projects">
    <h2>Projects</h2>
    <div class="project-list">
      <div class="project-card">
        <h3>Personal Profile Website</h3>
        <p>
          A modern, responsive profile site built with Vue.js and hosted on Vercel. Features a guestbook powered by Supabase for real-time comments and feedback.
        </p>
        <ul>
          <li>Vue.js frontend</li>
          <li>Supabase guestbook integration</li>
          <li>Deployed on Vercel</li>
          <li>Mobile & tablet responsive</li>
        </ul>
      </div>
      <!-- Add more projects below as needed -->
      <div class="project-card">
        <h3>Gaming-Themed Landing Page</h3>
        <p>
          An interactive landing page inspired by popular games, featuring animated backgrounds and smooth transitions.
        </p>
        <ul>
          <li>Custom CSS animations</li>
          <li>Responsive design</li>
          <li>Gaming-inspired UI</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  margin-bottom: 2rem;
  background: rgba(42, 26, 77, 0.85);
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 2px 12px #bfa6e8;
  color: #f0f0f5;
}

.projects h2 {
  color: #d9a9e3;
  margin-bottom: 1.5rem;
  text-align: center;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.project-card {
  background: rgba(75, 54, 124, 0.9);
  border-radius: 12px;
  box-shadow: 0 2px 8px #bfa6e8;
  padding: 1.5rem;
  width: 320px;
  max-width: 100%;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 4px 16px #d9a9e3;
}

.project-card h3 {
  margin-top: 0;
  color: #bfa6e8;
}

.project-card ul {
  margin: 0.5rem 0 0 1rem;
  padding: 0;
  color: #e6d9f7;
  font-size: 0.98rem;
}

@media (max-width: 700px) {
  .project-list {
    flex-direction: column;
    align-items: center;
  }
  .project-card {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>

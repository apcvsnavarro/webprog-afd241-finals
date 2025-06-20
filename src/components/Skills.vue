<template>
  <section class="skills" id="skills">
    <h2>Skills & Tools</h2>
    <ul class="skills-list">
      <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
        Vue.js
      </li>
      <li>
        <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Vercel" />
        Vercel
      </li>
      <li>
        <img src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="Supabase" />
        Supabase
      </li>
      <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
        HTML5 & CSS3
      </li>
      <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        JavaScript
      </li>
      <li>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
        GitHub & Codespaces
      </li>
      <li>
        <span>🎮</span>
        Gaming-Themed Web Design
      </li>
      <li>
        <span>📱</span>
        Responsive Design
      </li>
    </ul>
  </section>
</template>

<style scoped>
.skills {
  text-align: center;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
}

.skills-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(42, 26, 77, 0.85);
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  box-shadow: 0 2px 8px #bfa6e8;
}

.skills-list img {
  width: 24px;
  height: 24px;
}
</style>

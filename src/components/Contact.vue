<template>
  <section class="contact" id="contact">
    <h2>Contact</h2>
    <p>
      Feel free to reach out for collaborations, questions, or just to say hi!
    </p>
    <ul class="contact-list">
      <li>
        <a href="mailto:your.email@example.com">
          <span>📧</span> your.email@example.com
        </a>
      </li>
      <li>
        <a href="https://github.com/your-github" target="_blank" rel="noopener">
          <span>🐱</span> GitHub
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener">
          <span>🔗</span> LinkedIn
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact {
  background: rgba(75, 54, 124, 0.85);
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 2px 12px #bfa6e8;
  margin-bottom: 2rem;
  color: #f0f0f5;
  text-align: center;
}

.contact h2 {
  color: #d9a9e3;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.contact-list a {
  color: #d9a9e3;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;
}

.contact-list a:hover {
  color: #f0f0f5;
}

@media (max-width: 600px) {
  .contact {
    padding: 1rem;
  }
  .contact h2 {
    font-size: 1.5rem;
  }
  .contact-list a {
    font-size: 1rem;
  }
}
</style>

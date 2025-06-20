<template>
  <nav class="navbar">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#guestbook">Guestbook</a>
    <a href="#contact">Contact</a>
  </nav>
</template>

<style>
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
</style>

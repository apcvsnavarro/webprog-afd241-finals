<template>
  <section class="gallery" id="gallery">
    <h2>Robin Photo Gallery</h2>
    <p>I chose Robin to be my website theme because her song was on repeat on my spotify the time I was thinking of what to do with my finals.</p>
    <p>if ever you guys haven't done it yet, you can click/tap the mute button on the top left of the website to play the song.</p>
    <div class="gallery-grid">
      <div v-for="(photo, idx) in robinPhotos" :key="idx" class="gallery-item">
        <img :src="photo.url" :alt="photo.caption" />
      </div>
    </div>
  </section>
</template>

<script setup>
const robinPhotos = [
  {
    url: '/robinhd1.webp',
  },
  {
    url: '/robinhd2.webp',
  },
  {
    url: '/robinhd3.jpg',
  },
  {
    url: '/robinhd7.webp',
  },
  {
    url: '/robinhd8.jpg',
  },
  {
    url: '/robinhd6.webp',
  },
  {
    url: '/robin1.webp',
  },
  {
    url: '/robin2.webp',
  },
  {
    url: '/robin3.webp',
  },
  {
    url: '/robin4.webp',
  },
  {
    url: '/robin5.webp',
  },
  {
    url: '/robin6.webp',
  },
  // Add more robin photos as needed
]
</script>

<style scoped>
.gallery {
  background: rgba(75, 54, 124, 0.85);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  color: #f0f0f5;
  box-shadow: 0 2px 12px #bfa6e8;
}
.gallery h2 {
  color: #d9a9e3;
  margin-bottom: 1.5rem;
  text-align: center;
}
.gallery p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 0.8rem;
  text-align: center;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
}
.gallery-item {
  background: #3b2a6d;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 8px #bfa6e8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery-item img {
  width: 100%;
  height: 280px;      /* Increased from 140px or 180px */
  object-fit: cover;  /* Keeps the image nicely cropped */
  border-radius: 8px; /* Optional: rounded corners */
}

@media (max-width: 600px) {
  .gallery {
    padding: 1rem;
  }
  .gallery-item img {
    height: 100px;
  }
  .caption {
    font-size: 0.95rem;
  }
}
</style>

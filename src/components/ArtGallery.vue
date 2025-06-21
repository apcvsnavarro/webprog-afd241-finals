<template>
  <section class="art-gallery" id="gallery">
    <h2>Art Gallery</h2>
    <div class="gallery-grid">
      <div v-for="art in artworks" :key="art.id" class="gallery-item">
        <img :src="art.image" :alt="art.title" />
        <div class="art-info">
          <h3>{{ art.title }}</h3>
          <p>{{ art.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const artworks = ref([
  {
    id: 1,
    title: 'Sunset Overdrive',
    description: 'A vibrant sunset painted with bold brush strokes.',
    image: '/gallery/sunset.jpg',
  },
  {
    id: 2,
    title: 'City Lights',
    description: 'An abstract depiction of city life at night.',
    image: '/gallery/citylights.jpg',
  },
  // Add more artworks as needed
])
</script>

<style scoped>
.art-gallery {
  background: rgba(75, 54, 124, 0.85);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  color: #f0f0f5;
  box-shadow: 0 2px 12px #bfa6e8;
}

.art-gallery h2 {
  color: #d9a9e3;
  margin-bottom: 1.5rem;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
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
  height: 180px;
  object-fit: cover;
}

.art-info {
  padding: 1rem;
  text-align: center;
}

.art-info h3 {
  margin: 0.5rem 0 0.25rem 0;
  color: #d9a9e3;
}

.art-info p {
  font-size: 0.95rem;
  color: #e6d9f7;
}

@media (max-width: 600px) {
  .art-gallery {
    padding: 1rem;
  }
  .gallery-item img {
    height: 140px;
  }
}
</style>

<template>
  <div class="guestbook">
    <h2>Guestbook</h2>
    <form @submit.prevent="addComment">
      <input v-model="name" placeholder="Your name" required />
      <textarea v-model="message" placeholder="Your message" required></textarea>
      <button type="submit">Sign Guestbook</button>
    </form>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const name = ref('')
const message = ref('')
const comments = ref([])

const fetchComments = async () => {
  let { data } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false })
  comments.value = data || []
}

const addComment = async () => {
  if (!name.value || !message.value) return
  await supabase.from('guestbook').insert([{ name: name.value, message: message.value }])
  name.value = ''
  message.value = ''
  fetchComments()
}

onMounted(fetchComments)
</script>

<style scoped>
.guestbook {
  background: rgba(42, 26, 77, 0.95);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px #BFA6E8;
  max-width: 600px;
  margin: 0 auto;
}

.guestbook h2 {
  color: #D9A9E3;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}

.guestbook label {
  display: block;
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: #E6D9F7;
}

.guestbook input,
.guestbook textarea {
  background: #3B2A6D;
  border: 1.5px solid #6E57A4;
  color: #F0F0F5;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.guestbook input:focus,
.guestbook textarea:focus {
  border-color: #D9A9E3;
  box-shadow: 0 0 10px #D9A9E3;
  outline: none;
}

.guestbook button {
  background: #D9A9E3;
  color: #2A1A4D;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;
}

.guestbook button:hover {
  background: #BFA6E8;
  color: #fff;
}

.entries {
  margin-top: 2rem;
  list-style: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
  border-top: 1px solid #6E57A4;
}

.entries li {
  padding: 1rem 0;
  border-bottom: 1px solid #6E57A4;
  color: #E6D9F7;
}

.entries li strong {
  color: #D9A9E3;
  font-weight: 700;
}
</style>

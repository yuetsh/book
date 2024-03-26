<template>
  <div class="author">
    <img class="photo" :src="'/avatars/' + name + '.svg'" alt="avatar" />
    <div class="intro">
      <span class="name">{{ name }}</span>
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  name: string
  title: string
}
defineProps<Props>()
</script>
<style scoped>
.author {
  display: inline-flex;
  margin: 2rem 4rem 0 0;
}

.photo {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.intro {
  display: flex;
  flex-direction: column;
}
.name {
  font-weight: bold;
}
</style>

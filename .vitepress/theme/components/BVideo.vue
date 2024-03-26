<template>
  <div class="video">
    <iframe :src="url"></iframe>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue"
interface Props {
  src: string
  p?: number
}

const props = defineProps<Props>()
const url = computed(() => {
  let url = `https://player.bilibili.com/player.html?bvid=${props.src}`
  if (props.p) {
    url += `&page=${props.p}`
  }
  return url
})
</script>
<style scoped>
.video {
  position: relative;
  width: 100%;
  padding-bottom: calc(56.25% + 68px);
}

.video > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>

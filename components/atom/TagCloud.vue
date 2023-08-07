<template>
  <div
    class="w-full aspect-square flex justify-center items-center"
    ref="tagCloudContainer"
  ></div>
</template>

<script setup lang="ts">
import TagCloud from 'TagCloud';
const tagCloudContainer = ref(null);

const texts = [
  'Inertia.js',
  'Typescript',
  'Vue',
  'Vite',
  'Pinia',
  'Laravel',
  'MySQL',
  'Figma',
  'TailwindCSS',
  'Nuxt',
  'REST',
];
const options = {
  radius: 250,
};

onMounted(() => {
  TagCloud(tagCloudContainer.value, texts, options);
});
</script>

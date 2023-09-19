<template>
  <div class="sticky top-0 z-40 w-full flex items-center justify-center">
    <nav
      class="
        px-6
        py-3
        bg-white
        dark:bg-black/80 dark:backdrop-blur-sm
        flex
        items-center
        space-x-3
        rounded-b-xl
        dark:border-gray-500
        border-x border-b border-gray-400
      "
    >
      <div class="flex items-baseline space-x-3">
        <template v-for="link in links">
          <AtomSelectedNavigationLink v-if="currentSection === link.name">
            {{ link.name }}</AtomSelectedNavigationLink
          >
          <AtomNavigationLink v-else> {{ link.name }}</AtomNavigationLink>
        </template>
      </div>
      <MoleculeThemeToggle />
    </nav>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  { name: 'Home' },
  { name: 'Projects' },
  { name: 'About me' },
]);

const props = defineProps({
  currentSection: String,
});
</script>

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
      <div class="flex items-baseline space-x-3 bg-blue-500 relative">
        <AtomNavigationLink ref="homeLink" class="relative z-[1]"
          >Home</AtomNavigationLink
        >
        <AtomNavigationLink ref="projectsLink" class="relative z-[1]"
          >Projects</AtomNavigationLink
        >
        <AtomNavigationLink ref="aboutMeLink" class="relative z-[1]"
          >About me</AtomNavigationLink
        >
        <div class="absolute rounded-full bg-green-500 h-[24px] w-[37px]"></div>
      </div>
      <MoleculeThemeToggle />
    </nav>
  </div>
</template>

<script setup lang="ts">
const homeLink = ref(null);
const projectsLink = ref(null);
const aboutMeLink = ref(null);

const homeLinkSize = useElementSize(homeLink);
const projectsLinkSize = useElementSize(projectsLink);
const aboutMeLinkSize = useElementSize(aboutMeLink);

const links = ref([
  { name: 'Home' },
  { name: 'Projects' },
  { name: 'About me' },
]);

const props = defineProps({
  currentSection: String,
});
</script>

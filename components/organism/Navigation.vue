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
        <AtomSelectedNavigationLink>Home</AtomSelectedNavigationLink>
        <AtomNavigationLink> Projects</AtomNavigationLink>
        <AtomNavigationLink>About me</AtomNavigationLink>
      </div>
      <MoleculeThemeToggle />
    </nav>
  </div>
</template>

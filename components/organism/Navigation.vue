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
        dark:border-x dark:border-b dark:border-gray-500
        border-x border-b border-gray-400
      "
    >
      <div class="flex items-baseline space-x-3">
        <NuxtLink
          class="
            text-md
            font-semibold
            text-gray-600
            py-1
            border
            rounded-full
            px-4
            border-gray-400
            dark:border-white
            text-gray-600
            dark:text-white
            bg-gradient-to-b
            from-gray-300
            to-white
            dark:bg-none
            hover:from-gray-400 hover:to-gray-100
            dark:hover:bg-gray-800
          "
        >
          Home
        </NuxtLink>

        <NuxtLink
          class="
            text-md
            font-semibold
            text-gray-600
            py-1
            border
            rounded-full
            px-4
            border-gray-400
            dark:border-white
            text-gray-600
            dark:text-white
            bg-gradient-to-b
            from-gray-300
            to-white
            dark:bg-none
            hover:from-gray-400 hover:to-gray-100
            dark:hover:bg-gray-800
          "
        >
          Projects
        </NuxtLink>

        <NuxtLink
          class="
            text-md
            font-semibold
            text-amethyst-800
            dark:text-white
            hover:text-amethyst-900
            border
            rounded-full
            border-amethyst-300
            dark:border-amethyst-700
            bg-gradient-to-b
            from-amethyst-500 from-60%
            to-amethyst-100
            dark:bg-grandient-to-b
            dark:from-amethyst-800
            dark:from-60%
            dark:to-amethyst-500
            dark:hover:gradient-to-b
            dark:hover:from-amethyst-700
            dark:hover:from-60%
            dark:hover:to-amethyst-400
            hover:bg-gradient-to-b
            hover:from-amethyst-600
            hover:from-60%
            hover:to-amethyst-300
            hover:from-gray-400
            hover:to-gray-100
            relative
            px-4
            py-1
          "
        >
          <span class="z-[1] relative">About me</span>
          <div
            class="
              z-[0]
              w-[calc(100%-8px)]
              h-[calc(100%-8px)]
              rounded-full
              absolute
              inset-x-[4px]
              top-0
              bg-gradient-to-b
              from-white from-10%
              dark:opacity-40
            "
          ></div>
        </NuxtLink>
      </div>
      <MoleculeThemeToggle />
    </nav>
  </div>
</template>

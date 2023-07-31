<template>
  <AtomAntroposWrapper>
    <header class="relative w-full">
      <div
        class="
          absolute
          w-full
          h-full
          bg-hero-pattern-light
          dark:bg-hero-pattern-dark
        "
        data-atropos-offset="-5"
      ></div>
      <div
        class="
          absolute
          w-full
          h-full
          hero-gradient
          dark:hero-gradient-dark
          from-[-10%]
        "
        data-atropos-offset="-5"
      ></div>
      <div
        class="max-w-screen-xl mx-auto flex justify-center xl:pt-40 xl:pb-60"
      >
        <div
          class="
            flex flex-col
            space-y-12
            text-amethyst-900
            dark:text-white
            relative
          "
        >
          <AtomRedGreenHeroSquares />

          <div class="flex">
            <AtomCrossedHeroText>Ruben</AtomCrossedHeroText>
          </div>

          <div class="flex space-x-24">
            <div class="relative">
              <AtomYellowHeroSquare />
              <AtomHeroProfileImage />
            </div>

            <div class="flex flex-col space-y-6">
              <div class="flex">
                <AtomCrossedHeroText>Hidalgo</AtomCrossedHeroText>
              </div>
              <h2
                class="font-serif text-black dark:text-white text-4xl"
                data-atropos-offset="2"
              >
                Full-Stack Web Developer and UI Designer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  </AtomAntroposWrapper>
</template>

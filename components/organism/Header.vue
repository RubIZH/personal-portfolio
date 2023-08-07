<template>
  <AtomAtroposWrapper>
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
        class="
          max-w-screen-xl
          mx-auto
          flex
          justify-center
          pt-40
          pb-40
          xl:pt-40 xl:pb-60
          px-6
          xl:px-0
        "
      >
        <div
          class="
            flex flex-col
            -space-y-4
            lg:space-y-12
            text-amethyst-900
            dark:text-white
            relative
          "
        >
          <AtomRedGreenHeroSquares />

          <div>
            <AtomHeroProfileImage class="xl:hidden mb-10" />
            <div class="flex justify-center xl:justify-start">
              <AtomCrossedHeroText>Ruben</AtomCrossedHeroText>
            </div>
          </div>

          <div class="flex space-x-0 xl:space-x-24">
            <div class="relative">
              <AtomYellowHeroSquare />
              <AtomHeroProfileImage class="hidden xl:flex" />
            </div>

            <div class="flex flex-col lg:space-y-6">
              <div class="flex justify-center xl:justify-start">
                <AtomCrossedHeroText>Hidalgo</AtomCrossedHeroText>
              </div>
              <h2
                class="
                  font-serif
                  text-black
                  dark:text-white
                  text-3xl
                  lg:text-4xl
                  text-center
                  xl:text-left
                "
                data-atropos-offset="2"
              >
                Full-Stack Web Developer and UI Designer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  </AtomAtroposWrapper>
</template>

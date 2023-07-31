<template>
  <div ref="atroposHeaderContainer" class="atropos w-full">
    <div class="atropos-scale">
      <div class="atropos-rotate">
        <div class="atropos-inner">
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
            <div class="px-4 sm:px-6 md:px-8 relative">
              <div
                class="
                  max-w-screen-xl
                  mx-auto
                  py-20
                  sm:pt-24
                  lg:pt-40
                  flex
                  justify-center
                "
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
            </div>
          </header>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Atropos from 'atropos';
import { ref, onMounted, onUnmounted } from 'vue';

const atroposHeaderContainer = ref(null);

var myAtropos = null;

onMounted(() => {
  myAtropos = Atropos({
    el: atroposHeaderContainer.value,
    shadow: false,
    highlight: false,
    rotateXMax: 17,
    rotateYMax: 17,
  });
});

onUnmounted(() => {
  myAtropos.destroy();
});
</script>

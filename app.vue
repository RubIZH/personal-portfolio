<template>
  <div>
    <OrganismNavigation />
    <div class="mb-20 sm:pb-32 md:pb-60 -mt-[3.68rem] overflow-visible">
      <OrganismHeader />
      <main>
        <section
          class="
            max-w-screen-xl
            mx-auto
            flex flex-col
            space-y-8
            justify-center
            pt-20
            pb-40
            xl:pt-20 xl:pb-60
            px-6
            xl:px-0
          "
        >
          <h2 class="flex w-full text-left text-4xl font-semibold">Projects</h2>
          <div class="grid grid-cols-3 gap-4">
            <div class="w-full">
              <div
                class="
                  bg-green-500
                  text-black
                  aspect-square
                  rounded-t-lg
                  border-t-2 border-l-2 border-r-2 border-gray-400
                  dark:border-white
                "
              ></div>
              <div
                class="
                  flex
                  w-full
                  items-center
                  justify-center
                  p-4
                  rounded-b-lg
                  border-b-2 border-l-2 border-r-2 border-gray-400
                  dark:border-white
                  bg-hero-pattern-light
                  dark:bg-hero-pattern-dark
                  relative
                "
              >
                <div
                  class="
                    w-full
                    h-full
                    hero-gradient
                    dark:hero-gradient-dark
                    absolute
                    rounded-b-lg
                  "
                ></div>
                <h3 class="font-serif text-3xl relative">
                  Impulse Body Fitness
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

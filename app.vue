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
            xl:pt-20
            px-6
            xl:px-12 xl:px xl:px-0
          "
        >
          <h2 class="flex w-full text-left text-3xl lg:text-4xl font-semibold">
            Projects
          </h2>
          <div class="grid gril-cols-1 lg:grid-cols-3 gap-4">
            <AtomProjectCard />
            <AtomProjectCard />
            <AtomProjectCard />
          </div>
        </section>
        <section
          class="
            max-w-screen-xl
            mx-auto
            flex flex-col
            justify-center
            pt-20
            pb-40
            xl:pt-20
            px-6
            xl:px-12 xl:px xl:px-0
          "
        >
          <div class="grid gril-cols-1 lg:grid-cols-2 gap-4">
            <article class="w-full flex flex-col">
              <h2
                class="
                  flex
                  w-full
                  text-left text-3xl
                  lg:text-4xl
                  font-semibold
                  pb-8
                  border-b-2 border-gray-300
                "
              >
                About me
              </h2>

              <div
                class="
                  prose
                  lg:prose-xl
                  pt-8
                  text-black
                  dark:text-white
                  font-semibold
                "
              >
                <p>
                  I’m a Full-Stack Web Developer and UI/UX Designer based in
                  Mexico. I have a serious passion for coding, UI, and creating
                  the best experiences for users.
                </p>
                <p>
                  As a wearer of many hats, my experience includes graphic
                  design, 3D modeling and video editing. I am always curious and
                  always learning.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

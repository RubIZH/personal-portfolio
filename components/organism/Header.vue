<template>
  <header class="relative w-full">
    <div
      class="
        absolute
        w-full
        h-full
        bg-hero-pattern-light
        dark:bg-hero-pattern-dark
      "
    ></div>
    <div
      class="absolute w-full h-full bg-gradient-to-t from-white from-[-10%]"
    ></div>
    <div class="px-4 sm:px-6 md:px-8 relative">
      <div
        class="
          max-w-screen-xl
          mx-auto
          pt-20
          sm:pt-24
          lg:pt-40
          flex
          justify-center
        "
      >
        <div class="flex flex-col space-y-12 text-amethyst-900 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-48 h-48 -mr-48 absolute to-0 right-0"
            viewBox="0 0 210 200"
            fill="none"
          >
            <rect
              x="164.585"
              y="2.5"
              width="41.9194"
              height="41.9194"
              stroke="#93D152"
              stroke-width="5"
            />
            <rect
              x="96.4688"
              y="5"
              width="107.536"
              height="107.536"
              stroke="url(#paint0_linear_4956_404140)"
              stroke-width="10"
            />
            <rect
              x="32.832"
              y="61.2678"
              width="105.9"
              height="105.9"
              stroke="#EE855B"
              stroke-width="5"
            />
            <rect
              x="5"
              y="63.7678"
              width="131.232"
              height="131.232"
              stroke="url(#paint1_linear_4956_404140)"
              stroke-width="10"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4956_404140"
                x1="100.146"
                y1="117.536"
                x2="219.851"
                y2="1.53036e-06"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#86CB3C" />
                <stop offset="0.745521" stop-color="white" />
                <stop offset="1" stop-color="#86CB3C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4956_404140"
                x1="40.0474"
                y1="152.607"
                x2="174.408"
                y2="34.1233"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EE855B" />
                <stop offset="0.505208" stop-color="white" />
                <stop offset="1" stop-color="#EE855C" />
              </linearGradient>
            </defs>
          </svg>
          <div class="flex">
            <div class="grow-0 relative">
              <div
                class="
                  w-[calc(100%+10rem)]
                  -m-[1rem]
                  h-2.5
                  absolute
                  bg-[#FAC515]
                  top-[60%]
                "
              ></div>
              <h1
                class="
                  tracking-tight
                  leading-[7.5rem]
                  relative
                  mix-blend-hard-light
                  font-serif
                  text-[8.75rem]
                "
              >
                Ruben
              </h1>
            </div>
          </div>

          <div class="flex space-x-24">
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-28 h-28 top-[30%] -start-12 absolute"
                viewBox="0 0 178 178"
                fill="none"
                s
              >
                <rect
                  x="2.5"
                  y="112.5"
                  width="63"
                  height="63"
                  stroke="#FAC515"
                  stroke-width="5"
                />
                <rect
                  x="5"
                  y="5"
                  width="168"
                  height="168"
                  stroke="url(#paint0_linear_4958_403736)"
                  stroke-width="10"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4958_403736"
                    x1="6.5"
                    y1="169.5"
                    x2="162.5"
                    y2="29.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAC515" />
                    <stop offset="0.505208" stop-color="white" />
                    <stop offset="1" stop-color="#FAC515" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="h-28 w-28 relative">
                <div
                  class="
                    -top-[3rem]
                    -left-[2.5rem]
                    top-0
                    bg-contain
                    absolute
                    bg-no-repeat bg-center
                    w-52
                    h-52
                    bg-[url('assets/images/me.png')]
                  "
                ></div>
              </div>
            </div>

            <div class="flex flex-col space-y-6">
              <div class="grow-0 relative">
                <div
                  class="w-full -m-[1rem] h-2.5 absolute bg-[#FAC515] top-[60%]"
                ></div>
                <h1
                  class="
                    tracking-tight
                    leading-[7.5rem]
                    relative
                    mix-blend-hard-light
                    font-serif
                    text-[8.75rem]
                  "
                >
                  Hidalgo
                </h1>
              </div>
              <h2 class="font-serif text-black dark:text-white text-4xl">
                Full-Stack Web Developer and UI Designer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

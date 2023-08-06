<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="
      w-32
      h-32
      lg:w-40 lg:h-40
      xl:w-48 xl:h-48
      absolute
      top-0
      right-0
      -mr-12
      -mt-20
      lg:-mr-6 lg:-mt-6
      xl:-mt-0 xl:-mr-48
    "
    viewBox="0 0 210 200"
    fill="none"
    data-atropos-offset="-3"
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
      :stroke="
        $colorMode.value === 'light'
          ? 'url(#paint0_linear_4956_404140)'
          : '#93D152'
      "
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
      :stroke="
        $colorMode.value === 'light'
          ? 'url(#paint1_linear_4956_404140)'
          : '#EE855B'
      "
      stroke-width="10"
    />

    <defs v-if="$colorMode.value === 'light'">
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
</template>

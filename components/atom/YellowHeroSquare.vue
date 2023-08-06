<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="
      w-16
      h-16
      sm:w-20 sm:h-20
      top-12
      -start-10
      absolute
      xl:w-28 xl:h-28 xl:top-[50%] xl:-start-12
    "
    viewBox="0 0 178 178"
    fill="none"
    data-atropos-offset="-3"
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
      :stroke="
        $colorMode.value === 'light'
          ? 'url(#paint0_linear_4958_403736)'
          : '#FAC515'
      "
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
</template>

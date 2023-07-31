<template>
  <div ref="atroposHeaderContainer" class="atropos w-full">
    <div class="atropos-scale">
      <div class="atropos-rotate">
        <div class="atropos-inner">
          <slot></slot>
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

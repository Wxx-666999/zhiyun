<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },
})
</script>

<template>
  <section class="page-hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="page-hero__veil"></div>
    <div class="container page-hero__content">
      <p class="page-hero__eyebrow">{{ eyebrow }}</p>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="page-hero__sub">{{ subtitle }}</p>
    </div>
  </section>
</template>
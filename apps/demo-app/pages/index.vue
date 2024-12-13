<template>
  <div class="max-w-5xl mx-auto space-y-6 py-12 px-6">
    <h1 class="text-3xl font-bold">Hi, I'm the demo app POC</h1>
    <p>All of my tailwind class styles are coming from base-layer, as part of the NuxtUI inclusion. So, there's no need to install Tailwind in projects that extend from base-layer.</p>
    <hr>
    <p>This component comes from base-layer/components.</p>
    <VButton v-model:count="parentCount">Click me</VButton>
    <p>I can also emit back to the parent from base-style: <UBadge color="red" variant="outline">Counter: {{ parentCount }}</UBadge></p>
    <p>It's a regular button with CSS styling scoped to the component.</p>
    <p>Clicking the button will increment a counter, which is also scoped to the component.</p>
    <hr>
    <p>This is a NuxtUI button, also coming from the base-layer.</p>
    <UButton icon="i-heroicons-home" @click="toggleHidden">Click me</UButton>
    <div v-if="hidden">NOW YOU SEE ME</div>
  </div>
</template>
<script setup>
  const parentCount = ref(0)
  const hidden = ref(false)
  const toggleHidden = () => hidden.value = !hidden.value
</script>

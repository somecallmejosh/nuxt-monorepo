<template>
  <div class="max-w-5xl mx-auto space-y-6 py-12 px-6">
    <UCard>
      <div class="space-y-4 mb-8">
        <h1 class="text-5xl font-bold">Customer Portal</h1>
        <p>All of my tailwind class styles are coming from base-layer, as part of the NuxtUI inclusion. So, there's no need to install Tailwind in projects that extend from base-layer.</p>
      </div>
      <div class="grid grid-cols-2 gap-12 mb-6">
        <UCard>
          <div class="space-y-6">
            <p>This component comes from base-layer/components.</p>
            <VButton v-model:count="parentCount">Click me</VButton>
          </div>
        </UCard>
        <UCard>
          <div>
            <UButton icon="i-heroicons-home" @click="toggleHidden">Click me</UButton>
            <div v-if="hidden" class="space-y-4">
              <p>Above is a NuxtUI button, also coming from the base-layer.</p>
              <p>I can also emit back to the parent from base-style: <UBadge color="primary" variant="outline">Counter: {{ parentCount }}</UBadge></p>
              <p>Clicking the button on the left will increment a counter, which is also scoped to the above badge component.</p>
            </div>
          </div>
        </UCard>
      </div>
      <p class="font-bold text-lg">Data from JSON PLACEHOLDER using useGetData() composable in base layer.</p>
      <UTable v-if="data" :rows="data" :columns="columns" />
    </UCard>
  </div>
</template>
<script setup>
  const parentCount = ref(0)
  const hidden = ref(false)
  const toggleHidden = () => hidden.value = !hidden.value
  const {data} = useGetData('https://jsonplaceholder.typicode.com/comments')
  const columns = [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'body', label: 'Comment'},
  ]
</script>

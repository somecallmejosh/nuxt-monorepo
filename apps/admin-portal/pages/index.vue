<template>
  <div class="max-w-5xl mx-auto py-12 px-6">
    <UCard>
      <div class="space-y-6">
        <h1 class="font-bold text-5xl">Admin Portal - BEHOLD!</h1>
        <p>I have access to all the same stuff as the demo-app. It's pretty dope.</p>
        <div class="grid grid-cols-2 gap-6 bg-neutral-50 p-6 rounded divide-x">
          <div>
            <VButton v-model:count="parentCount">Click me</VButton>
          </div>
          <div class="flex flex-col justify-center text-center space-y-2">
            <p>Emitting to parent also works.</p>
            <div>
              <UBadge
                icon="i-heroicons-rocket-launch"
                size="sm"
                color="primary"
                variant="outline"
                :label="parentCount"
                :trailing="false"
              />
            </div>
          </div>
        </div>
        <p class="font-bold text-lg">Data from JSON PLACEHOLDER using useGetData() composable in base layer.</p>

        <UTable v-if="data" :rows="data" :columns="columns" />
      </div>
    </UCard>
  </div>
</template>
<script setup>
  const parentCount = ref(0)
  const {data} = useGetData('https://jsonplaceholder.typicode.com/users')
  const columns = [
    {key: 'id', label: 'ID'},
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'phone', label: 'Phone'},
  ]
</script>

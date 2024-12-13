<template>
  <UButton color="primary" @click="onClick">
    <slot></slot> {{ count }}
  </UButton>
</template>
<script setup>

const count = ref(0);

const onClick = () => {
  count.value++;
  emit('update:count', count.value)
}

const emit = defineEmits(['update:count'])
</script>

<template>
  <div class="bg-white max-w-fit p-3 shadow-lg rounded-2xl overflow-hidden">
    <img :src="filepath" class="max-w-full h-auto">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Card } from '../types/state.ts'

const props = defineProps<{
  card: Card
}>()

const filepath = computed<string>(() => {
  const number = String(props.card.value).padStart(2, '0')
  const suit = props.card.suit
  return new URL(`/src/assets/cards/${number}_${suit}.jpg`, import.meta.url).href
})
</script>

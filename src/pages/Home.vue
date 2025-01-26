<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <h1 class="text-xl mb-2 font-bold">Scopa!</h1>
    <button @click="startAndNavigateToGame" class="text-lg font-semibold">Start game</button>
  </div>
</template>

<script setup lang="ts">
import { useGamesStore } from '../stores/games.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const { createGame } = useGamesStore()

const startAndNavigateToGame = () => {
  const url = createGame()
  console.log(url)
  router.push(url)
}
</script>

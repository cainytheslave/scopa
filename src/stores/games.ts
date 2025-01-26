import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import { v4 as uuidv4, type UUIDTypes } from 'uuid';
import type { Game } from '../types/state';

export const useGamesStore = defineStore('games', () => {
  const games: Ref<Map<UUIDTypes, Game>> = ref(new Map())

  const createGame = () => {
    const id = uuidv4()

    const players = [
      {
        isHuman: true,
        points: 0,
        hand: [],
        tricks: []
      },
      {
        isHuman: false,
        points: 0,
        hand: [],
        tricks: []
      }
    ]

    games.value.set(id, {
      players,
      turn: 0,
      table: [],
      talon: [],
      lastTake: null
    })

    return `/game/${id}`
  }

  return { games, createGame }
})

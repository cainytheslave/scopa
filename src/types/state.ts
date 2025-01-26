import { Value, Suit } from './types.ts'

interface Card {
  value: Value
  suit: Suit
}

interface Trick {
  played: Card,
  captured: Card[],
  isScopa: boolean
}

interface Player {
  isHuman: boolean,
  points: number,
  hand: Card[],
  tricks: Trick[]
}

interface Game {
  players: Player[],
  turn: number,
  table: Card[],
  talon: Card[],
  lastTake: number | null
}

export type { Card, Player, Game, Trick }


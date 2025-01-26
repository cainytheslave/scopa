const Value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
type Value = typeof Value[number];

enum Suit {
  Denari = "denari",
  Coppe = "coppe",
  Spade = "spade",
  Bastoni = "bastoni"
}

export { Value, Suit }

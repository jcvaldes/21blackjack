/**
 *  "2C" = Two of Clubs
 *  "2D" = Two of Diamonds
 *  "2H" = Two of Hearts
 *  "2S" = Two of Spades
 *  AS vale 11
 *  JKQ valen 10
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// esta funcion permite crear un deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for( let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  // console.log(deck);
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push( esp + tipo);
    }
  }
  console.log(deck);
  deck = _.shuffle( deck )
  console.log(deck)
}
crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
  // Me aseguro de que haya cartas
  if (deck.length === 0) {
    throw 'No hay cartas en el deck'
  }

  // cuando se pide carta debo sacarlo del deck
  const carta = deck.pop()
  console.log(deck)
  console.log(carta)
  return carta
}

// simulo el pedido de cartas
// for (let i = 0; i <= 100; i++) {
//   pedirCarta()
// }

// simulo el deck vacio
// deck = []
pedirCarta()
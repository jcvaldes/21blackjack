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
  // muestro el deck
  console.log(deck);
  // barajeo el deck
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
  // console.log(deck)
  // console.log(carta)
  return carta
}

// simulo el pedido de cartas
// for (let i = 0; i <= 100; i++) {
//   pedirCarta()
// }

// simulo el deck vacio
// deck = []

// pedirCarta()

const valorCarta = ( carta ) => {
  // const valor = carta[0]; //no es la forma adecuada de extraer el numero, probar con 10D para eso usamos substring
  // console.log(valor);
  const valor = carta.substring(0, carta.length - 1);
  // let puntos = 0;
  // if (isNaN(valor)) {
  //   console.log('No es un número');
  //   // La J, K , Q valen 10 puntos excepto la A que vale 11
  //   puntos = ( valor === 'A' ) ? 11 : 10;
  // } else {
  //   console.log('Es un número');
  //   // para transformar a numero
  //   puntos = valor * 1;
  // }
  // console.log(puntos);

  // simplificacion del codigo anterior
  return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
// valorCarta('2D')
// valorCarta('10D')
// valorCarta('KD')
debugger
// muestro el valor de la carta sacado del deck

console.log(valorCarta(pedirCarta()));
console.log(valorCarta(pedirCarta()));

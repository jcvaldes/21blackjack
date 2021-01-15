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

let puntosJugador = 0,
    puntosComputadora = 0;

const puntosHTML = document.querySelectorAll('small');
const btnPedir = document.querySelector('#btnPedir')
const btnNuevo = document.querySelector('#btnNuevo')
const btnDetener = document.querySelector('#btnDetener')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
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

// muestro el valor de la carta sacado del deck

// console.log(valorCarta(pedirCarta()));
// console.log(valorCarta(pedirCarta()));

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta()
  puntosJugador = puntosJugador + valorCarta(carta) 
  // console.log(puntosJugador)
  puntosHTML[0].innerText = puntosJugador

  // Esto es lo que quiero crear dinamicamente
  //  <img class="carta" src="assets/img/2C.png" alt="carta">
  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/img/${carta}.png`
  imgCarta.classList.add('carta')
  divCartasJugador.append(imgCarta)
  
  // Evaluo los puntos
  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste')
    btnPedir.disabled = true
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador)
  } else if ( puntosJugador === 21) {
    console.warn('genial!!, ganaste')
    btnPedir.disabled = true
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador)
  }
})
btnDetener.addEventListener('click', () => { 
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador)
})

const turnoComputadora = ( puntosMinimos ) => {
  do {
    const carta = pedirCarta()
    puntosComputadora = puntosComputadora + valorCarta(carta) 
    console.log(puntosComputadora)
    puntosHTML[1].innerText = puntosComputadora
  
    // Esto es lo que quiero crear dinamicamente
    //  <img class="carta" src="assets/img/2C.png" alt="carta">
    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/img/${carta}.png`
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta)
    // si los puntos minimos que saco el jugador si supera los 21 
    // con cualquier carta que saque la computadora ya gana
    if ( puntosMinimos > 21) {
      break
    }
  } while( (puntosComputadora < puntosMinimos) && (puntosComputadora <= 21) )
} 

// console.log(25)
// turnoComputadora(25)  
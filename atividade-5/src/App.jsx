import { useState } from 'react'
import './App.css'

function App() {
  const [dados, setDados] = useState(null)
  //Se usar '0', a tela inicial ficaria praticamente igual, porque nesta condição: {dados && (...)}, o 0 é considerado falso em JavaScript. Então as imagens não apareceriam antes do clique, assim como acontece com 'null'. Logo, 'null' é melhor por significado: 'null'--> ainda não houve sorteio; '0'--> é apenas o número 0. 
  //No Craps, os dados nunca podem valer 0; eles vão de 1 a 6. Por isso, null deixa claro que o valor não representa um resultado do jogo, representa apenas “não sorteado ainda”.
  
  const [ponto, setPonto] = useState(null)

  function sortearDados() {
    const dado1 = Math.ceil(Math.random()*6)
    const dado2 = Math.ceil(Math.random()*6)

    const soma = dado1 + dado2
    
    function regraEtapa1() {
      if (soma === 7 || soma === 11) {
        return "Venceu!"      
      } else if (soma === 2 || soma === 3 || soma === 12) {
        return "Perdeu!"      
      } else {
        setPonto (soma)   
        return `O JOGO CONTINUA! Seu ponto é ${soma}`
      }
    }

    function regraEtapa2() {
      if (soma === ponto) {
        setPonto(null) 
        return "Venceu! Clique novamente para iniciar uma nova partida."
      } else if (soma === 7) {
        setPonto(null)
        return "Perdeu! Clique novamente para iniciar uma nova partida."
      } else {
        return `O JOGO CONTINUA! Seu ponto é ${ponto}`
      }
    }

    let mensagem

    if (ponto === null) {
      mensagem = regraEtapa1()
    } else {
      mensagem = regraEtapa2()
    }

    setDados({ dado1, dado2, soma, mensagem })
    //É a mesma coisa que escrever:
    //   setDados({
    //    dado1: dado1,
    //    dado2: dado2
    //   })
  }

  // <></> É um fragmento. Ele permite agrupar elementos sem criar uma div extra no HTML.

  return (
    <>
      <main className="game-card">
      <img className="craps-image" src="/craps.jpg" alt="Mesa de jogo de craps"/>

      <section className="game-content" aria-labelledby="game-title">
        <h1 id="game-title">Jogo de Craps</h1>
        <p>Os dados aparecerão aqui após a primeira jogada.</p>
        <p>Clique em "Jogar os dados" para começar!</p>

        <button onClick={sortearDados} type="button">Jogar os dados!</button>

      {dados && (  //Teste Condicional: só mostre o conteúdo abaixo se dados tiver algum valor. Ou seja, é uma proteção.
                   //Outro fragmento '<> </>', para mostrar mais de um elemento dentro da condição. 
      <>
        <h3>Dados sorteados: {dados.dado1} e {dados.dado2}</h3>
        <h3>Soma: {dados.soma}</h3>
        <h2>{dados.mensagem}</h2>

        <img src={`/dado${dados.dado1}.png`} alt={`Dado ${dados.dado1}`} />
        <img src={`/dado${dados.dado2}.png`} alt={`Dado ${dados.dado2}`} />
      </>
      )}
      </section>
    </main>
    </>
  )
}

export default App

/* Exercício:
Criar um App para simular o
Jogo do Craps:
- Inicialmente, monte a tela
conforme Layout ao lado.

Regras do Jogo:
- 2 dados são sorteados
(Math.ceil(Math.random()*6)

- Se a soma dos dados for 7 ou
11, o jogador vence direto.

- Se a soma for 2, 3 ou 12, o
jogador perde direto

Outros valores, o jogo continua.

O objetivo do jogador agora é
jogar novamente os dados e
repetir a mesma soma da
jogada inicial.

Contudo, se a soma for 7, ele
perde.

Outros valores, o jogo continua.*/
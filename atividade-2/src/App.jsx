import { useState } from 'react'
import './App.css'

function App() {
  const [volume, setVolume] = useState(50)

  function aumentar() {

    if (volume == 100){
      alert("O volume já está no máximo!")
      return
    }

    const num = volume + 10
    setVolume(num)
  }

  function diminuir() {
    
    if (volume == 0) {
      alert("O volume já está mudo!")
      return
    }

    const num = volume - 10
    setVolume(num)
  }


  return (
    <>
    <div className="principal">
      <div className="topo">
        <h1>Caixa de Som</h1>
        <h2>Controle de Volume</h2>

        <div className="central">
          <h3>Volume: {volume}%</h3>
          <div className="botoes">
            <button onClick={aumentar}>Aumentar volume</button>
            <button onClick={diminuir}>Diminuir volume</button>
          </div>
        </div>
      </div>

      <div className="img">
        <img src="sound-box.jpg" alt="Sound Box" />
      </div>
    </div>

    </>
  )
}

export default App

// Exercício: Controle de Volume

// Crie uma aplicação React que simule o controle de volume de uma caixa de som.

// A tela deve ter:
// - Título: **Caixa de Som**
// - Subtítulo: **Controle de Volume**
// - Uma imagem de caixa de som ou fone de ouvido
// - Texto mostrando o volume atual, por exemplo: `Volume: 50%`
// - Botão **Aumentar volume**
// - Botão **Diminuir volume**

// Regras:
// 1. O volume inicial deve ser `50`.
// 2. Ao clicar em **Aumentar volume**, ele deve aumentar `10`.
// 3. Ao clicar em **Diminuir volume**, ele deve diminuir `10`.
// 4. O volume máximo é `100`. Se já estiver em 100 e a pessoa tentar aumentar, mostre um `alert` avisando que o volume já está no máximo.
// 5. O volume mínimo é `0`. Se já estiver em 0 e a pessoa tentar diminuir, mostre um `alert` avisando que o som está mudo.
// 6. O valor do volume nunca pode passar de 100 nem ficar menor que 0.
// 7. Use `useState`, duas funções e `onClick` nos botões.
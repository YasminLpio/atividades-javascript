import { useState } from 'react'
import './App.css'

function App() {
  const [sinaleira, setSinaleira] = useState(0)

  function imagemSinaleira() {
    if (sinaleira === 0) {
      return '/vermelha.png'
    } else if (sinaleira === 1) {
      return '/amarela.png'
    } else {
      return '/verde.png'
    }
  }
  function trocarCor() {
    if (sinaleira === 0) {
      setSinaleira(1)
      
    } else if (sinaleira === 1) {
      setSinaleira(2)
      
    } else {
      setSinaleira(0)
      a
    }
  }


  function mensagemSinaleira() {
    if (sinaleira === 0) {
      return 'Sinal Vermelho: Proibido passar!'
    } else if (sinaleira === 1) {
      return 'Sinal Amarelo: Atenção!'
    } else {
      return 'Sinal Verde: Pode passar!'
    }
  }

  return (
    <>
      <h1>Escola de Trânsito</h1>
      <h2>Aula sobre Sinaleira</h2>
      <hr />

      <button onClick={trocarCor} style={{ cursor: 'pointer' }}>
        <img src={imagemSinaleira()} alt="Sinaleira" />
      </button>

      <h2>{mensagemSinaleira()}</h2>
      <h3>Clique na sinaleira para trocar de cor</h3>
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'

function App() {
  const [vagas, setVagas] = useState(20)

  function entrada() {
    // alert("Veículo Entrou no Estacionamento")
    if (vagas == 0) {
      alert("Por favor, aguarde... Não há vagas disponíveis")
      return
    }
    const num = vagas - 1
    setVagas(num)
  }

  function saida() {
    // alert("Veículo Saiu do Estacionamento")
    if (vagas == 20) {
      alert("Não há vagas ocupadas. Verifique.")
      return
    }
    const num = vagas + 1
    setVagas(num)
  }

  return (
    <>
      <h1>Estacionamento Central</h1>
      <h2>Controle de Vagas</h2>

      <img src="./parking.png" alt="Parking" />

      <h3>Vagas Disponíveis: {vagas}</h3>
      <h3>Vagas Ocupadas: {20-vagas}</h3>

      <button onClick={entrada}>Entrada de Veículos</button>
      <button onClick={saida}>Saída de Veículos</button>
    </>
  )
}

export default App

// Exercício: Controle de vagas no estacionamento
// Crie um componente React para controlar as vagas de um estacionamento com capacidade para **20 carros**.

// A tela deve apresentar:
// - Título: **Estacionamento Central**
// - Subtítulo: **Controle de Vagas**
// - Quantidade de vagas disponíveis
// - Quantidade de vagas ocupadas
// - Botão **“Entrada de veículo”**
// - Botão **“Saída de veículo”**

// Regras:
// 1. O estacionamento começa com **20 vagas disponíveis**.
// 2. Ao clicar em “Entrada de veículo”, diminua uma vaga disponível.
// 3. Ao clicar em “Saída de veículo”, aumente uma vaga disponível.
// 4. Se não houver vagas disponíveis, mostre um `alert` avisando que o estacionamento está lotado e não altere o número.
// 5. Se todas as 20 vagas estiverem disponíveis, mostre um `alert` dizendo que não há veículos no estacionamento e não altere o número.
// 6. A quantidade de vagas ocupadas deve ser calculada a partir do total: `20 - vagasDisponiveis`.

// Tente manter a estrutura parecida com a do exercício das mesas: use `useState`, duas funções para os botões e condições com `if`.
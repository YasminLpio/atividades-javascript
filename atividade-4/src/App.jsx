import { useState } from 'react'
import './App.css'

function App() {
  const [tenis, setTenis] = useState(0)

  function imagemTenis() {
    if (tenis === 0) {
      return '/t1.webp'
    } else if (tenis === 1) {
      return '/t2.webp'
    } else if (tenis === 2) {
      return '/t3.webp'
    } else {
      return '/t4.webp'
    }
  }

  function trocarTenis(novoTenis) {
    setTenis(novoTenis)
  }

  return (
    <>
      <h1>Calçados Avenida</h1>
      <h2>Veja detalhes do tênis: Olympikus Delta Unissex</h2>
      <hr />

      <div className="conjunto">
        <img
          className="individual"
          src={imagemTenis()}
          alt="Foto principal do tênis"
        />

        <div className="trio">
          <button onClick={() => trocarTenis(1)} style={{ cursor: 'pointer' }}>
            <img src="/t2.webp" alt="Segunda foto do tênis" />
          </button>

          <button onClick={() => trocarTenis(2)} style={{ cursor: 'pointer' }}>
            <img src="/t3.webp" alt="Terceira foto do tênis" />
          </button>

          <button onClick={() => trocarTenis(3)} style={{ cursor: 'pointer' }}>
            <img src="/t4.webp" alt="Quarta foto do tênis" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
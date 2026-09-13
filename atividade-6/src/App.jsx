import { useState } from 'react';
import './App.css'

function App() {

  const [ideal, setIdeal] = useState(null)
  const [altura, setAltura] = useState('')
  const [sexo, setSexo] = useState('')

  function pesoIdeal() {
    const alturaNumero = Number(altura)

    let peso

    if (sexo === 'masculino') {
      peso = 22 * (alturaNumero * alturaNumero)
    } else {
      peso = 21 * (alturaNumero * alturaNumero)
    }
  
  const resultado = `Seu peso ideal é ${peso.toFixed(2)} kg`

  setIdeal ({ peso, resultado })
}




  return (
    <main className="app-peso">
      <section className="cartao-peso">
        <div className="painel-imagem">
          <img src="/photo.jpg" alt="Balança e fita métrica" />
        </div>

        <section className="painel-formulario" aria-labelledby="titulo-pagina">
          <p className="subtitulo">Saúde e bem-estar</p>
          <h1 id="titulo-pagina">Cálculo do Peso Ideal</h1>

          <p className="introducao">
            Preencha seus dados para calcular uma estimativa do seu peso ideal.
          </p>

          <form>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" placeholder="Digite seu nome" />

            <fieldset>
              <legend>Sexo</legend>

              <div className="opcoes-radio">
                <label className="rotulo-radio">
                  <input type="radio" name="sexo" value="masculino"  checked={sexo === 'masculino'} onChange={(evento) => setSexo(evento.target.value)} />
                  <span>Masculino</span>
                </label>

                <label className="rotulo-radio">
                  <input type="radio" name="sexo" value="feminino" checked={sexo === 'feminino'} onChange={(evento) => setSexo(evento.target.value)}/>
                  <span>Feminino</span>
                </label>
              </div>
            </fieldset>

            <label htmlFor="altura">Altura</label>

            <div className="campo-altura">
              <input
                id="altura"
                type="number"
                step="0.01"
                placeholder="Ex.: 1.70"
                value={altura}
                onChange={(evento) => setAltura(evento.target.value)}
              />
              <span>m</span>
            </div>

            <div className="acoes">
              <button onClick={pesoIdeal} className="botao-calcular" type="button">
                Calcular peso ideal
              </button>

              <button className="botao-limpar" type="button">
                Limpar campos
              </button>
            </div>
          </form>

          <div className="caixa-resultado">
            <span>Resultado</span>
            <p>{ideal ? ideal.resultado : ''}</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App  
import './Home.css'
import './Aulas.css'
import './benefios.css'
import './Footer.css'
import './Regras.css'
import './Venn.css'
import './preco.css'

export function Home() {
  return (
    <>
      <header>
        <h2> C.T Arena IHKM  (Instituto Hanaga Krav Maga)</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Aulas</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <div className="home-content">

        <h2>Desenvolvemos:</h2>
        <div className='desenvolvemos'>
          <p className='explicacao'>
          Aprendizado prático dos conceitos de auto defesa, levando o praticante a ser capaz de se observar e fortalecer sua mente para então ser capaz de controlar situações de crise (internas ou externas).
          </p>
          <div className='venn'>
          <div className='metodologia'>Metodologia ditadica</div>
          <div className='teorica'>Teorica</div>
          <div className='pratica'>Pratica</div>
        </div>
        </div>

        <h3 className='lema'>Nosso lema: Você pode fazer melhor</h3>
        <div className='main-sections'>
          <Regras/>
          <Aulas/> 
          <Preco/>
          <Beneficios/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export function Aulas() {
  return (
    <div className="aulas-container">
      <h2 className="aulas-header">Aulas</h2>

      <div className="aula-card">
        <button className='aula-botao' onClick={() => window.open("https://wa.me/554499271050", "_blank")}>
        <strong className="aula-titulo">Particular:</strong>
        <p className="aula-descricao">Entrar em contato direto pelo WhatsApp. </p>
        </button>
      </div>

            <div className="aula-card">
        <button className='aula-botao' onClick={() => window.open("https://www.google.com/maps/place/R.+Marins+C+Pereira,+433+-+Jardim+Horizonte,+Campo+Mour%C3%A3o+-+PR,+87303-029/@-24.02992,-52.3837808,17z/data=!3m1!4b1!4m6!3m5!1s0x94ed7521b53fee1b:0x5f192544a624ec1e!8m2!3d-24.0299249!4d-52.3812059!16s%252Fg%252F11y64x78b6?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQ", "_blank")}>
        <strong className="aula-titulo">Endereço:</strong>
        <p className="aula-descricao">Rua Marins C. Pereira 433 </p>
        </button>
      </div>


      <div className="aula-card">
        <strong className="aula-titulo">Krav Kids:</strong>
        <p className="aula-descricao">Terça e quinta das 18:30 às 19:30 (4 a 11 anos).</p>
      </div>

      <div className="aula-card">
        <strong className="aula-titulo">Turma Geral:</strong>
        <p className="aula-descricao">Segunda a sexta das 19:30 às 20:30, e sábado das 09:00 às 10:30.</p>
      </div>
      <button onClick={() => window.open("https://wa.me/554499271050", "_blank")}> Marca uma aula experimental de graça apertando aqui</button>
    </div>
  );
}

export function Beneficios() {
  return (
    <div className="beneficios-container">
      <h2 className="beneficios-header">Benefícios</h2>
      <ul className="beneficios-card">
        <li>Auto confiança</li>
        <li>Preparo físico</li>
        <li>Defesa pessoal</li>
        <li>Foco mental</li>
      </ul>
    </div>
  );
}


export function Footer() {
  return (
    <footer>
      <p className="footer-text">
        Site desenvolvido por <span className="footer-creators">Vitor Hugo Teles❤️</span> e equipe do C.T Arena IHKV
      </p>

      <div className="footer-links">
        <a href="https://www.instagram.com/c.t.arena/">Instagram</a> | <a href="https://wa.me/554499271050">WhatsApp +55 (44) 9927-1050</a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} C.T Arena INHKV — Todos os direitos reservados.
      </p>
    </footer>
  );
}

export function Endereço(){
  return (
    <div>
      <p><a href="https://www.google.com/maps/place/R.+Marins+C+Pereira,+433+-+Jardim+Horizonte,+Campo+Mour%C3%A3o+-+PR,+87303-029/@-24.02992,-52.3837808,17z/data=!3m1!4b1!4m6!3m5!1s0x94ed7521b53fee1b:0x5f192544a624ec1e!8m2!3d-24.0299249!4d-52.3812059!16s%2Fg%2F11y64x78b6?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"></a>Rua Marins C. Pereira 433</p>
    </div>
  )
}

export function Regras(){
  return (
    <div className='Regras-container'>
      <h2 className='Regras-header'> As regas do C.T</h2>
      <ul className='Regras-card'>
        <li>Diciplina</li>
        <li>Respeito</li>
        <li>Cumprimentar o tatame ao entrar e sair</li>
        <li>Não se envolver em brigas desnecessárias</li>
        <li>Não fazer ou aceitar desafios em nome do C.T</li>
        <li>Não falar palavrão <strong>(multa de $05,00 e 15 flexão)</strong></li>
        <li>Proibido falar <strong>"Não consigo"</strong> sujeito a pagar 10 flexão</li>
      </ul>
    </div>
  )
}

export function Preco(){
  return (
    <div className='preco-container'>
      <h2 className='preco-header'>tabela de Preços</h2>
      <div className='preco-cards'>
      <div className='preco-card'>
      <h2 className='preco-titulo'>Plano de 3 aulas na semana.</h2>
      <p className='preco-descriçao'>R$130,00</p>
      </div>
      <div className='preco-card'>
      <h2 className='preco-titulo'>Plano de ir toda semana</h2>
      <p className='preco-descriçao'>R$160,00</p>
      </div>
      <div className='preco-card'>
      <h2 className='preco-titulo'>Plano por ano </h2>
      <p className='preco-descriçao'>R$200,00</p>
      </div>
      </div>
    </div>
  )
}
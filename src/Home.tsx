import './Home.css'
import './Aulas.css'
import './benefios.css'
import './Footer.css'

export function Home() {
  return (
    <>
      <header>
        <h2> C.T Arena INHKV  (Instituto Nacional Hanaga Krav Maga)</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Aulas</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <div className="home-content">
        <h3>Defenda-se, Fortaleça-se, Transforme-se com o Krav Maga</h3>
        <button onClick={() => window.open("https://wa.me/554499271050", "_blank")}> Marca uma aula experimental de graça apertando aqui totalmente de graça</button>
        <h2>Sobre Nós</h2>
        <p>
          A gente é um centro de treinamento a onde ensinamos Krav Maga, mas não apenas isto e sim carater, diciplina e conduta, somos bastante rigorosos com isso.
        </p>

        <Aulas/>
        
        <Beneficios/>

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
        <strong className="aula-titulo">Endereço::</strong>
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
    </div>
  );
}

export function Beneficios() {
  return (
    <div className="beneficios-container">
      <h2 className="beneficios-header">Benefícios</h2>
      <ul className="beneficios-lista">
        <li className="beneficio-card">Auto confiança</li>
        <li className="beneficio-card">Preparo físico</li>
        <li className="beneficio-card">Defesa pessoal</li>
        <li className="beneficio-card">Foco mental</li>
      </ul>
    </div>
  );
}


export function Footer() {
  return (
    <footer>
      <p className="footer-text">
        Site desenvolvido por <span className="footer-creators">Vitor Hugo Teles❤️</span> e equipe do C.T Arena INHKV
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
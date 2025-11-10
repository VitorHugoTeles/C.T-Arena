import { Footer } from "./Home";
import './Sobre.css'
import './Footer.css'

export function Sobre(){
    return (
        <div>
<div className="capa-container">
  <img src="src/assests/perfil.jpg" alt="Foto do Professor" className="foto-perfil" />
</div>

<div className="bio-container">
  <h2>Instrutor: José Ari</h2>
  <p>
    Instrutor certificado pelo Instituto Nacional Hanaga Krav Maga (INHKV),
    com ênfase em disciplina, ética e conduta marcial. Exige comprometimento,
    respeito e dedicação de todos os alunos.
  </p>
</div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
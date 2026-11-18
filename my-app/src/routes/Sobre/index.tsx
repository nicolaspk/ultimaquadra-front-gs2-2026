import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

export default function Sobre() {
  return (
    <>
      <TituloPagina
        etiqueta="Sobre o projeto"
        titulo="Acessibilidade começa antes da porta."
        descricao="O ÚltimaQuadra reúne informações sobre obstáculos físicos no entorno das Unidades Básicas de Saúde."
      />
      <section aria-labelledby="sobre-ideia" className="bg-white py-16 sm:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] text-[#0c7771] uppercase">Por que o projeto existe</p>
            <h2 id="sobre-ideia" className="mt-4 text-3xl font-extrabold leading-tight text-[#0b2b3d] sm:text-4xl">
              O percurso até a unidade de saúde também importa.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-[#496666]">
            <p>Buracos, desníveis e passagens estreitas podem dificultar a chegada de idosos, pessoas com deficiência e pessoas com mobilidade reduzida às UBS.</p>
            <p>A plataforma organiza os relatos por unidade e área de acesso, ajudando outras pessoas a conhecer as barreiras informadas pela comunidade.</p>
            <p>Os relatos não são laudos técnicos nem garantem a segurança do percurso.</p>
            <Link to="/" className="mt-3 inline-flex min-h-11 items-center font-bold text-[#0c7771] underline underline-offset-4">Voltar ao início</Link>
          </div>
        </Container>
      </section>
    </>
  );
}

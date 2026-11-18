import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

export default function Home() {
  return (
    <>
      <section aria-labelledby="titulo-home" className="padrao-piso overflow-hidden bg-gradient-to-br from-[#fff8f3] via-[#f7f8f5] to-[#eaf4f1] py-16 sm:py-20 lg:py-28">
        <Container className="max-w-4xl">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f3bd9f] bg-[#fff0e7] px-4 py-2 text-xs font-bold tracking-[0.09em] text-[#97472f] uppercase sm:text-sm">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#e77852]" />
              CitizenTech · Acessibilidade urbana
            </p>
            <h1 id="titulo-home" className="max-w-2xl text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.04] font-extrabold tracking-[-0.06em] text-[#0b2b3d]">
              A saúde começa no <span className="text-[#087f78]">caminho até ela.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#3d5e55] sm:text-lg">
              O ÚltimaQuadra organiza informações sobre obstáculos nas calçadas que dão acesso às Unidades Básicas de Saúde, valorizando o percurso como parte do acesso ao cuidado.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/ocorrencias"
                className="botao-destaque inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-extrabold"
              >
                Consultar ocorrências
              </Link>
              <Link
                to="/registrar"
                className="botao-secundario inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold"
              >
                Registrar ocorrência
              </Link>
            </div>
            <Link to="/unidades" className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-extrabold text-[#0b555e] underline underline-offset-4 hover:text-[#087f78] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f78]">
              Prefere começar pela UBS? Ver unidades cadastradas
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

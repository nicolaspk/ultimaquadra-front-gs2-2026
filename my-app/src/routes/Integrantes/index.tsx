import Container from '../../components/Container/Container';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

type Integrante = {
  nome: string; rm: string; turma: string; iniciais: string;
  foto: string; github: string; linkedin: string;
};

const integrantes: Integrante[] = [
  { nome: 'Maria Eduarda Escandor', rm: '568216', turma: '1TDSPO', iniciais: 'ME', foto: '/assets/equipe/foto-maria1.jpeg', github: 'https://github.com/mariabatistaescandor-gif', linkedin: 'https://www.linkedin.com/in/maria-eduarda-escandor-5b1587359/' },
  { nome: 'Erick Menezes', rm: '570325', turma: '1TDSPF', iniciais: 'EM', foto: '/assets/equipe/foto-erick.jpeg', github: 'https://github.com/DevErick-658', linkedin: 'https://www.linkedin.com/in/erick-menezes-b53009232/' },
  { nome: 'Maria Eduarda Lopes de Lima', rm: '572425', turma: '1TDSPO', iniciais: 'ML', foto: '/assets/equipe/foto-maria2.png', github: 'https://github.com/mariaeduardaalima', linkedin: 'https://www.linkedin.com/in/maria-eduarda-lopes-de-lima-1291b6289/' },
  { nome: 'Matheus Yudi', rm: '571245', turma: '1TDSPF', iniciais: 'MY', foto: '/assets/equipe/matheus.png', github: 'https://github.com/ogmatheus7', linkedin: 'https://www.linkedin.com/in/matheus-yudi7/' },
  { nome: 'Nicolas Sousa', rm: '574141', turma: '1TDSPH', iniciais: 'NS', foto: '/assets/equipe/foto-nicolas.jpg', github: 'https://github.com/nicolaspk', linkedin: 'https://www.linkedin.com/in/nicolas-sousaa/' },
];

export default function Integrantes() {
  return (
    <>
      <TituloPagina etiqueta="Nossa equipe" titulo="Cinco pessoas, um propósito compartilhado." descricao="Conheça os integrantes do ÚltimaQuadra." />
      <section className="bg-[#f7f8f5] py-14 sm:py-18">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-extrabold text-[#0b2b3d]">Equipe de desenvolvimento</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {integrantes.map((integrante) => (
              <article key={integrante.rm} className="flex min-w-0 flex-col items-center rounded-[1.6rem] border border-[#d8e4e1] bg-white p-6 shadow-[0_15px_30px_-25px_#0b2b3d]">
                {integrante.foto ? <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} className="size-26 rounded-2xl object-cover" loading="lazy" /> : null}
                <h3 className="mt-5 text-center text-xl font-extrabold text-[#0b2b3d]">{integrante.nome}</h3>
                <p className="mt-3 text-sm text-[#496666]">RM {integrante.rm} · {integrante.turma}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={integrante.github} target="_blank" rel="noopener noreferrer" className="botao-primario rounded-xl p-3 text-center text-sm font-bold">GitHub</a>
            <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer" className="botao-secundario rounded-xl p-3 text-center text-sm font-bold">LinkedIn</a>
          </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

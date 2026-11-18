import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

export default function Contato() {
  const [mensagem, setMensagem] = useState('');

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setMensagem('Campos conferidos. Esta página ainda não está conectada a um serviço de e-mail.');
    evento.currentTarget.reset();
  }

  return (
    <>
      <TituloPagina
        etiqueta="Fale com a equipe"
        titulo="Sua mensagem também faz parte da conversa."
        descricao="Tem uma dúvida, sugestão ou comentário sobre o ÚltimaQuadra? Utilize o formulário abaixo."
      />
      <section aria-labelledby="contato-formulario" className="bg-[#f7f8f5] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[1.8rem] bg-[#0b2b3d] p-7 text-white sm:p-9">
            <p className="text-xs font-extrabold tracking-[0.16em] text-[#a5ece0] uppercase">Contato e participação</p>
            <h2 className="mt-5 text-3xl font-extrabold">Queremos ouvir suas ideias.</h2>
            <p className="mt-5 leading-8 text-[#d1e7e5]">Para relatar obstáculos próximos às UBS, utilize a página de registro de ocorrências.</p>
            <Link to="/registrar" className="botao-destaque mt-6 inline-flex min-h-11 items-center rounded-xl px-5 py-3 font-bold">Registrar ocorrência</Link>
          </aside>
          <div className="rounded-[1.8rem] border border-[#d7e4df] bg-white p-6 sm:p-9">
            <h2 id="contato-formulario" className="text-2xl font-extrabold text-[#0b2b3d]">Escreva para a equipe</h2>
            <p className="mt-3 leading-7 text-[#496666]">Preencha os campos obrigatórios abaixo.</p>
            {mensagem && <p role="status" className="mt-6 rounded-xl bg-[#e5f7ee] p-4 font-semibold text-[#0a5c49]">{mensagem}</p>}
            <form onSubmit={enviar} className="mt-7 space-y-5">
              <div>
                <label htmlFor="contato-nome" className="text-sm font-bold text-[#0b2b3d]">Nome completo</label>
                <input id="contato-nome" name="nome" required minLength={2} maxLength={100} autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-[#bcd4ce] bg-[#f9fcfb] px-4 text-[#0b2b3d]" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="contato-email" className="text-sm font-bold text-[#0b2b3d]">E-mail</label>
                <input id="contato-email" name="email" required type="email" maxLength={150} autoComplete="email" className="mt-2 min-h-12 w-full rounded-xl border border-[#bcd4ce] bg-[#f9fcfb] px-4 text-[#0b2b3d]" placeholder="seuemail@exemplo.com" />
              </div>
              <div>
                <label htmlFor="contato-mensagem" className="text-sm font-bold text-[#0b2b3d]">Sua mensagem</label>
                <textarea id="contato-mensagem" name="mensagem" required minLength={15} maxLength={1000} rows={5} className="mt-2 w-full rounded-xl border border-[#bcd4ce] bg-[#f9fcfb] px-4 py-3 text-[#0b2b3d]" placeholder="Escreva sua dúvida ou sugestão" />
              </div>
              <button type="submit" className="botao-primario inline-flex min-h-12 items-center rounded-xl px-6 py-3 font-extrabold">Conferir mensagem</button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

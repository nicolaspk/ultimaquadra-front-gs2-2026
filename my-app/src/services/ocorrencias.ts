import type { NovoRelato, Ocorrencia, ResultadoCadastro, Trecho, Unidade } from '../types/estrutura';

// Base comum para trabalho independente: a implementação real será integrada depois.
// Nenhuma consulta substitui falhas da API por dados fictícios.
const AVISO = 'Serviço de consulta e cadastro ainda não integrado à API Java.';
export const usandoApi = true;
export function trechoExigeReferencia(trecho: Trecho | undefined): boolean {
  return Boolean(trecho && (
    trecho.nome === 'Entorno imediato da UBS — local a indicar' ||
    trecho.nome === 'Calçada de acesso à UBS'
  ));
}
export function referenciaLocalClara(valor: string): boolean {
  return valor.trim().length >= 15;
}
export async function listarUnidades(signal?: AbortSignal): Promise<Unidade[]> {
  void signal;
  throw new Error(AVISO);
}
export async function listarTrechos(signal?: AbortSignal): Promise<Trecho[]> {
  void signal;
  throw new Error(AVISO);
}
export async function listarOcorrencias(signal?: AbortSignal): Promise<Ocorrencia[]> {
  void signal;
  throw new Error(AVISO);
}
export async function buscarOcorrencia(id: string, signal?: AbortSignal): Promise<Ocorrencia | undefined> {
  void id; void signal;
  throw new Error(AVISO);
}
export async function cadastrarOcorrencia(dados: NovoRelato): Promise<ResultadoCadastro> {
  void dados;
  throw new Error(AVISO);
}
export async function excluirOcorrencia(id: string): Promise<void> {
  void id;
  throw new Error(AVISO);
}
export function observarAlteracoes(aoAlterar: () => void): () => void {
  void aoAlterar;
  return () => {};
}

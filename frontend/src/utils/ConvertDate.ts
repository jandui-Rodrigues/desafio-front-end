function convertDataIso(dataIso: string): string {
  const dataFormatada = new Date(dataIso).toLocaleDateString("pt-BR");

  return dataFormatada;
}

export default convertDataIso;

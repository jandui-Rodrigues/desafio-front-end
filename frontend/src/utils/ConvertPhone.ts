function ConvertPhone(numeroTelefone: string): string {
  const ddd = numeroTelefone.slice(0, 2);
  const prefixo = numeroTelefone.slice(2, 4);
  const sufixo = numeroTelefone.slice(4, 8);
  const final = numeroTelefone.slice(8, 11);

  return `+${ddd} (${prefixo}) ${sufixo}-${final}`;
}

export default ConvertPhone;

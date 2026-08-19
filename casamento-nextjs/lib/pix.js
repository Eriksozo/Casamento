/* Monta códigos Pix Copia e Cola (padrão EMV BR Code do Banco Central).
 *
 * O código base veio pronto do banco, sem valor. Para as cotas com valor
 * sugerido é preciso inserir o campo 54 e RECALCULAR o CRC dos últimos 4
 * dígitos — um payload editado sem refazer o CRC é recusado pelo app.
 *
 * Tudo roda em tempo de build (export estático), então nada disso vai
 * como JavaScript para o navegador do convidado.
 */

/* Código original do banco, sem valor: é a opção "outro valor" e também
   a rede de segurança — vai para a tela exatamente como foi gerado. */
export const PIX_BASE =
  '00020126580014BR.GOV.BCB.PIX013683c5b12f-e450-4fa2-9eca-f70ab990faaa5204000053039865802BR5920Erik Magalhaes Silva6009SAO PAULO62140510rpinyk18R86304FBAC';

export const RECEBEDOR = 'Erik Magalhães Silva';

/* CRC-16/CCITT-FALSE, o que a especificação do BR Code exige */
function crc16(texto) {
  let crc = 0xffff;
  for (let i = 0; i < texto.length; i++) {
    crc ^= texto.charCodeAt(i) << 8;
    for (let b = 0; b < 8; b++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/* separa o payload em campos { id, valor }, na ordem */
function separar(payload) {
  const campos = [];
  let i = 0;
  while (i + 4 <= payload.length) {
    const id = payload.slice(i, i + 2);
    const tam = parseInt(payload.slice(i + 2, i + 4), 10);
    campos.push({ id, valor: payload.slice(i + 4, i + 4 + tam) });
    i += 4 + tam;
  }
  return campos;
}

const montar = (id, valor) => id + String(valor.length).padStart(2, '0') + valor;

/**
 * Devolve o código com o valor embutido. `reais` como número (150 -> "150.00").
 * Sem valor, devolve o código original intacto.
 */
export function pixComValor(reais) {
  if (!reais) return PIX_BASE;

  const campos = separar(PIX_BASE).filter((c) => c.id !== '63' && c.id !== '54');
  campos.push({ id: '54', valor: reais.toFixed(2) });

  /* a especificação exige os campos em ordem crescente de id */
  campos.sort((a, b) => a.id.localeCompare(b.id));

  const corpo = campos.map((c) => montar(c.id, c.valor)).join('') + '6304';
  return corpo + crc16(corpo);
}

export { crc16, separar };

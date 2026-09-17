const nomes = [
"Fernanda",
"Giuliana",
"Maria Eduarda",
"Marcelo",
"Amanda",
"Gustavo",
"Gabriel"
];

/**

Escolhe aleatoriamente um item de uma lista.
*/
export function aleatorio(lista) {
const posicao = Math.floor(Math.random() * lista.length);

return lista[posicao];
}

/**

Escolhe um nome aleatório.
*/
export const nome = aleatorio(nomes);
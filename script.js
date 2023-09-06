// Exercicios Origamid 

// Verifique se a sua idade é maior do que a de algum parente
let minhaIdade = 23;
let idadeMae = 43;
console.log(minhaIdade > idadeMae);

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (minhaIdade > idadeMae) {
  console.log("Minha idade é maior")
} else if(minhaIdade === idadeMae){
  console.log("Minha idade é igual")
} else {
  console.log("Minha idade é menor")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

  console.log(expressao); // o último verdadeiro é expressado === 3.


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // string é verdadeiro 
var idade = 28;     // numéro !== 0 é verdadeiro
var possuiDoutorado = false;  // falso pois está passando o valor "false"
var empregoFuturo;            // undefined é falso
var dinheiroNaConta = 0;      // 0 é falso


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207; 
var china = 1340;

if (brasil > china) {
  console.log(" O total de habitantes do Brasil é maior");
} else if (brasil < china) {
  console.log("O total de habitantes da China é maior");
} else {
  console.log("O total de habitantes dos paises são iguais.");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { // falso e verdadeiro vai aparacer o primeiro falso.
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { // falso ou verdadeiro irá verificar a proxima linha de código
  console.log('Gato' && 'Cão'); // dentro do console há verdadeiro e verdadeiro, então irá prevalecer o 2º valor. "Cão" será imprimido na tela.
} else {
  console.log('Falso');
}

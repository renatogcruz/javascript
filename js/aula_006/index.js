let nome = "João";
// var nome = "João";

console.log(nome, "nasceu em 1985")
console.log(nome, "estudou engenharia na USP")
console.log("Maria conheceu", nome, "na cidade de São Paulo")
console.log(nome, "e Maria tiveram dois filhos")
console.log(nome, "morreu e não se aposentou")


let ano; // declarou a variável
console.log(nome, "nasceu em", ano=1958) // inicializando a variável

// não podemos usar palavras reservadas como variáveis
// não podemos iniciar um nome de uma variável com número. Devemos usar letras minúsculas.
// let nomeCliente;
// let nome
// devemos utilizar camelCase
// let nomeCompletoDoCliente
// case-sensitive


// CONSTANTES
// mesmas regras das variaveis
// devemos inicializar no momento da declaração
// não deve ser mudado

const myName = "Renato Cruz";
console.log(myName)

const piValue = 3.14;
console.log("O valor de pi é", piValue)

const primeiroNumero = 5;
const segundoNumero = 10;
console.log(primeiroNumero + segundoNumero)

console.log(typeof(primeiroNumero))
console.log(typeof(myName))

// para formatar (estilo fstring py) assim precisamos usar crases e ${}
console.log(`Meu nome é ${myName} e ${piValue} é o valor de PI`); 
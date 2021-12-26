// params
/**
 * Uma function possui um arguments que sustenta todos os argumentos enviados
 * function funcao(){
 *  console.log(arguments)
 * }
 */
//
function funcao1() {
    console.log(arguments[2])    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao1(1, 2, 3, 4, 5, 6, 7)

//
function funcao2() {
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
        
    }
    console.log(total)
    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao2(1, 2, 3, 4, 5, 6, 7) 

//
function funcao3(a, b, c, d, e) {
    console.log(a, b, c, d, e)    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao3(1, 2, 3, 4, 5)

//
function funcao4(a, b, c, d, e) {
    console.log(a, b, c, d, e)    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao4(1, 2, 3)

//
function funcao5(a, b) {
    b = b || a; // maneira antiga
    console.log(a + b)    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao5(5)

//
function funcao6(a, b = a) {
    console.log(a + b)    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao6(5)

//
function funcao7(a, b = 0, c = 10) {
    console.log(a + b + c)    
}
// declara-se um argumento mesmo sem nenhum parametro definido na função
funcao7(5, undefined, 20)

// argumentos que sustentam todos os argumentos enviados
function funcao8({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)    
}
//funcao8(nome = "Renato", sobrenome = "Cruz", idade = 36)
funcao8({nome: "Renato", sobrenome:"Cruz", idade:36})

// 
function funcao9(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)    
}

funcao9("+", 0, 20, 30, 40, 50, 60, 70)

// 
function funcao9(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }  
    console.log(acumulador); 
}

funcao9("/", 0, 20, 30, 40, 50, 60, 70)


//
const conta = (...args) => {
    console.log(args)
};
conta("+", 1, 2, 3, 7, 8, 9)
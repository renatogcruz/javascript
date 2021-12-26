// declaração de função (function hoisting)

/**
 * O que é Hoisting em Javascript?
 * https://medium.com/devzera/o-que-%C3%A9-hoisting-em-javascript-b8c629178518
 * 
 * Hoisting
 * https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 */

function hello(){
    console.log("Hello World!")
}

hello()

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function(){
    console.log("Isso é um dado")
}

souUmDado()

function executaFuncao(funcao) {
    console.log("Vai executar uma função: ");
    funcao();
}

executaFuncao(souUmDado)

// arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function!")
}

funcaoArrow()

// dentro de um objeto
const obj = {
    falar() {
        console.log("Estou falando...");        
    }
}

obj.falar()
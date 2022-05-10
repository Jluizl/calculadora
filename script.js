let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let container = document.getElementById('container-resultado');
let resultado = document.getElementById('resultado');


function somar(){
    document.querySelector('.operador').innerHTML = '+'
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);

}
function subtrair(){
    document.querySelector('.operador').innerHTML = '-'
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);

}
function multiplicar(){
    document.querySelector('.operador').innerHTML = 'x'
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);

}
function dividir(){
    document.querySelector('.operador').innerHTML = '÷'
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value);

}

function calcular() {
    container.classList.remove("hide");
}

function mostraDisplay(value) {
    const display = document.getElementById('display');

    if (display.value === '0' || display.value === 'Erro') {
        display.value = value;
    } else {
        display.value += value;
    }
} // essa primeira função permite adicionar um valor ao visor


function limpar() {
    document.getElementById('display').value = '0';
} // o botão "C" pode ser usado para limpar a tela

function calcular() {
    const display = document.getElementById('display');
    try {
        const resultado = eval(display.value);
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}// Faz o cálculo, obs. eval faz o trabalho de fazer todos os cálculos de forma bem simples, caso contrário seria necessário muito mais linhas de código e vários if e else

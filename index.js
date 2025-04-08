"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const teclado = (0, prompt_sync_1.default)();
console.log('Criação de veículo');
const carro = criaVeiculo();
while (true) {
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");
    const opcao = +teclado('Escolha uma opção: ');
    if (opcao === 0) {
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 3:
            carro.trocarMarcha(carro.marchaAtual + 1);
            break;
        case 4:
            carro.trocarMarcha(carro.marchaAtual - 1);
            break;
        case 5:
            imprimirDados(carro);
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}
console.table(carro);
// Função auxiliar: acelerar
function acelerar(veiculo) {
    if (veiculo.marchaAtual != 0) {
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    }
    else {
        console.log("Coloque uma marcha diferente de 0 para acelerar.");
    }
}
// ✅ Nova função auxiliar: frear
function frear(veiculo) {
    if (veiculo.velocidade > 0) {
        veiculo.velocidade -= veiculo.potencia * 0.1;
        if (veiculo.velocidade < 0)
            veiculo.velocidade = 0;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    }
    else {
        console.log("O veículo já está parado.");
    }
}
// Função auxiliar: imprimir dados
function imprimirDados(veiculo) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Potência: ${veiculo.potencia}`);
    console.log(`Número de marchas: ${veiculo.numeroMarchas}`);
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
}
// Função auxiliar: criação do veículo
function criaVeiculo() {
    const veiculo = new Veiculo_1.Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while (true) {
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("6 - Exibir resumo rápido");
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
        case 6:
            carro.exibirResumo();
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}

console.table(carro);

// 🚗 Acelerar
function acelerar(veiculo: Veiculo): void {
    if (veiculo.marchaAtual !== 0) {
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    } else {
        console.log("Coloque uma marcha diferente de 0 para acelerar.");
    }
}

// 🚗 Frear
function frear(veiculo: Veiculo): void {
    if (veiculo.velocidade > 0) {
        veiculo.velocidade -= veiculo.potencia * 0.1;
        if (veiculo.velocidade < 0) veiculo.velocidade = 0;
        console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
    } else {
        console.log("O veículo já está parado.");
    }
}

// 🖨️ Imprimir dados completos
function imprimirDados(veiculo: Veiculo): void {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Cor: ${veiculo.cor}`);
    console.log(`Potência: ${veiculo.potencia}`);
    console.log(`Número de marchas: ${veiculo.numeroMarchas}`);
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    console.log(`Velocidade atual: ${veiculo.velocidade.toFixed(2)} km/h`);
}

// 🧱 Criar veículo
function criaVeiculo(): Veiculo {
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.cor = teclado('Cor do veículo: '); // 🔹 Novo campo
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor() {
        this.marca = 'Padrão';
        this.modelo = 'Padrão';
        this.potencia = 0;
        this.numeroMarchas = 5;
        this.marchaAtual = 0;
        this.velocidade = 0;
    }
    trocarMarcha(novaMarcha) {
        if (novaMarcha < 0 || novaMarcha > this.numeroMarchas) {
            console.log(`Marcha inválida: ${novaMarcha}. Este veículo possui de 0 a ${this.numeroMarchas} marchas.`);
        }
        else {
            this.marchaAtual = novaMarcha;
            console.log(`Marcha trocada para: ${this.marchaAtual}`);
        }
    }
}
exports.Veiculo = Veiculo;

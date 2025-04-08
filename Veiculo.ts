export class Veiculo {
    marca: string = 'Padrão';
    modelo: string = 'Padrão';
    cor: string = 'Indefinida'; // 🔹 Novo atributo
    potencia: number = 0;
    numeroMarchas: number = 5;
    marchaAtual: number = 0;
    velocidade: number = 0;

    trocarMarcha(novaMarcha: number): void {
        if (novaMarcha < 0 || novaMarcha > this.numeroMarchas) {
            console.log(`Marcha inválida: ${novaMarcha}. Este veículo possui de 0 a ${this.numeroMarchas} marchas.`);
        } else {
            this.marchaAtual = novaMarcha;
            console.log(`Marcha trocada para: ${this.marchaAtual}`);
        }
    }

    exibirResumo(): void {
        console.log(`Veículo: ${this.marca} ${this.modelo} (${this.cor})`);
        console.log(`Marcha atual: ${this.marchaAtual}`);
        console.log(`Velocidade: ${this.velocidade.toFixed(2)} km/h`);
    }
}

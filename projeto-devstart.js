// Classe que representa um atleta e realiza cálculos relacionados a suas informações
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        // Propriedades básicas do atleta
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;

        // Propriedades calculadas com base nas informações fornecidas
        this.categoria = this.calculaCategoria();
        this.imc = this.calculaIMC();
        this.mediaValida = this.calculaMediaValida();
    }

    // Método para determinar a categoria do atleta com base na idade
    calculaCategoria() {
        switch (true) {
            case (this.idade >= 9 && this.idade <= 11): {
                return "Infantil";
            }
            case (this.idade >= 12 && this.idade <= 13): {
                return "Juvenil";
            }
            case (this.idade >= 14 && this.idade <= 15): {
                return "Intermediário";
            }
            case (this.idade >= 16 && this.idade <= 30): {
                return "Adulto";
            }
            default:
                return "Sem categoria"; // Caso a idade não se encaixe em nenhuma categoria
        }
    }

    // Método que calcula o IMC (Índice de Massa Corporal)
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // Método que calcula a média válida das notas (exclui a maior e a menor nota)
    calculaMediaValida() {
        // Cria uma cópia ordenada do array de notas em ordem crescente
        let notasOrdenados = [...this.notas].sort((a, b) => a - b);

        // Remove a menor e a maior nota
        notasOrdenados.shift();
        notasOrdenados.pop();

        // Caso sobrem mais de 3 notas, pega apenas as 3 notas centrais
        if (notasOrdenados.length > 3) {
            const meio = Math.floor(notasOrdenados.length / 2);
            notasOrdenados = notasOrdenados.slice(meio - 1, meio + 2);
        }

        // Calcula a média das notas restantes
        let soma = notasOrdenados.reduce((total, nota) => total + nota, 0);
        let media = soma / notasOrdenados.length;
        return media;
    }

    // Métodos para obter as informações do atleta
    obtemNomeAtleta() {
        return this.nome;
    }
    obtemIdadeAtleta() {
        return this.idade;
    }
    obtemPesoAtleta() {
        return this.peso;
    }
    obtemNotasAtleta() {
        return this.notas;
    }
    obtemAlturaAtleta() {
        return this.altura;
    }
    obtemCategoria() {
        return this.categoria;
    }
    obtemIMC() {
        return this.imc;
    }
    obtemMediaValida() {
        return this.mediaValida;
    }
}

// Criação de um objeto 'Atleta' com dados de exemplo
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// Exibição das informações do atleta no console
console.log(`
    Nome: ${atleta.obtemNomeAtleta()}
    Idade: ${atleta.obtemIdadeAtleta()}
    Peso: ${atleta.obtemPesoAtleta()}
    Altura: ${atleta.obtemAlturaAtleta()}
    Notas: ${atleta.obtemNotasAtleta()}
    Categoria: ${atleta.obtemCategoria()}
    IMC: ${atleta.obtemIMC()}
    Média válida: ${atleta.obtemMediaValida()}
`);
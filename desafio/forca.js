class Forca {
	constructor(palavra) {
		this.palavraEscolhida = palavra.toLowerCase();
		this.letrasChutadas = [];
		this.vidas = 6;
		this.palavra = palavra.split('');
		this.palavraEscondida = this.palavra.map((letra) => (letra = '_'));
		this.state = 'aguardando chute';
	}

	chutar(letra) {
		if (!letra || letra.length > 1) {
			return;
		}
		if (letra === letra.toUpperCase()) {
			letra = letra.toLowerCase();
		}

		if (!this.palavra.includes(letra) && !this.letrasChutadas.includes(letra)) {
			this.vidas--;
		}

		if (!this.palavra.includes(letra) && this.letrasChutadas.includes(letra)) {
			return;
		}

		if (this.palavra.includes(letra)) {
			for (let i = 0; i < this.palavra.length; i++) {
				if (this.palavra[i] === letra) {
					this.palavraEscondida[i] = letra;
				}
			}
		}

		this.letrasChutadas.push(letra);
	}

	buscarEstado() {
		if (this.vidas === 0) {
			this.state = 'perdeu';
			return this.state;
		}

		if (this.vidas > 0 && !this.palavraEscondida.includes('_')) {
			this.state = 'ganhou';
			return this.state;
		}

		return this.state;
	} // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

	buscarDadosDoJogo() {
		return {
			letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
			vidas: this.vidas, // Quantidade de vidas restantes
			palavra: this.palavraEscondida // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
		};
	}
}

module.exports = Forca;

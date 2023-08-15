/*// para a exportação default podemos personalizar a importação
import pessoa from '.pessoa.js'; 

// obrigatório utilizar o nome atrbuida na exportação
import { limpar } from './util.js';
import { baseDados } from './util.js';

/* ou:

import { limpar, baseDados } from './util.js'; */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    imprimirNome() {
        console.log(this.nome, " ", this.sobrenome);
    }
}

nome = prompt("Nome: ");
sobrenome = prompt("Sobrenome: ");
novaPessoa = new Pessoa(nome, sobrenome);
novaPessoa.imprimirNome();
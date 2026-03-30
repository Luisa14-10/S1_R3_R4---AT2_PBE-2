export class Produto {
    #id;
    #idCategoria;
    #nome;
    #valor;
    #caminhoImagem;
    #dataCad;

    constructor(pIdCategoria, pNome, pValor, pCaminhoImagem, pId) {
        this.idCategoria = pIdCategoria;
        this.nome = pNome;
        this.valor = pValor;
        this.caminhoImagem = pCaminhoImagem;
        this.id = pId;
    }

    get id() { return this.#id; }
    get idCategoria() { return this.#idCategoria; }
    get nome() { return this.#nome; }
    get valor() { return this.#valor; }
    get caminhoImagem() { return this.#caminhoImagem; }

    set id(value) {
        if (value && value <= 0) throw new Error("ID inválido");
        this.#id = value;
    }

    set idCategoria(value) {
        this.#validarIdCategoria(value);
        this.#idCategoria = value;
    }

    set nome(value) {
        this.#validarNome(value);
        this.#nome = value;
    }

    set valor(value) {
        this.#validarValor(value);
        this.#valor = value;
    }

    set caminhoImagem(value) {
        this.#validarPathImagem(value);
        this.#caminhoImagem = value;
    }

    #validarIdCategoria(value) {
        if (!value || value <= 0) {
            throw new Error("Categoria inválida");
        }
    }

    #validarNome(value) {
        if (!value || value.trim().length < 3) {
            throw new Error("Nome inválido");
        }
    }

    #validarValor(value) {
        if (!value || value <= 0) {
            throw new Error("Valor inválido");
        }
    }

    #validarPathImagem(value) {
        if (!value) {
            throw new Error("Imagem obrigatória");
        }
    }

    static criar(dados) {
        return new Produto(
            dados.idCategoria,
            dados.nome,
            dados.valor,
            dados.caminhoImagem,
            null
        );
    }

    static editar(dados, id) {
        return new Produto(
            dados.idCategoria,
            dados.nome,
            dados.valor,
            dados.caminhoImagem,
            id
        );
    }
}
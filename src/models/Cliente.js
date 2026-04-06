export class Cliente {
    #id;
    #nome;
    #cpf;
    #cep;
    #telefones;

    constructor(nome, cpf, cep, telefones, id) {
        this.nome = nome;
        this.cpf = cpf;
        this.cep = cep;
        this.telefones = telefones;
        this.id = id;
    }

    get nome() { return this.#nome; }
    get cpf() { return this.#cpf; }
    get cep() { return this.#cep; }
    get telefones() { return this.#telefones; }
    get id() { return this.#id; }

    set nome(value) {
        this.#validarNome(value);
        this.#nome = value;
    }

    set cpf(value) {
        this.#validarCpf(value);
        this.#cpf = value;
    }

    set cep(value) {
        this.#validarCep(value);
        this.#cep = value;
    }

    set telefones(value) {
        this.#validarTelefone(value);
        this.#telefones = value;
    }

    set id(value) {
        if (value && value <= 0) throw new Error("ID inválido");
        this.#id = value;
    }

    #validarNome(value) {
        if (!value || value.length < 3) {
            throw new Error("Nome inválido");
        }
    }

    #validarCpf(value) {
        if (!value || value.length < 11) {
            throw new Error("CPF inválido");
        }
    }

    #validarCep(value) {
        if (!value || value.length < 8) {
            throw new Error("CEP inválido");
        }
    }

    #validarTelefone(value) {
        if (!Array.isArray(value) || value.length === 0) {
            throw new Error("Telefone obrigatório");
        }
    }

    static criar(dados) {
        return new Cliente(
            dados.nome,
            dados.cpf,
            dados.cep,
            dados.telefones,
            null
        );
    }
}
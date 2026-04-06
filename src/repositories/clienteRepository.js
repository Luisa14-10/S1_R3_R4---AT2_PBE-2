import { db } from "../configs/Database.js";

const clienteRepository = {
    criar: async (cliente, endereco) => {
        const [result] = await db.execute(
            "INSERT INTO clientes (Nome, Cpf) VALUES (?, ?)",
            [cliente.nome, cliente.cpf]
        );

        const clienteId = result.insertId;

        await db.execute(
            `INSERT INTO enderecos 
            (IdCliente, Cep, Logradouro, Bairro, Cidade, Estado) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                clienteId,
                cliente.cep,
                endereco.logradouro,
                endereco.bairro,
                endereco.localidade,
                endereco.uf
            ]
        );

        for (let tel of cliente.telefones) {
            await db.execute(
                "INSERT INTO telefones (IdCliente, Numero) VALUES (?, ?)",
                [clienteId, tel]
            );
        }

        return { clienteId };
    },

    selecionar: async () => {
        const [rows] = await db.execute("SELECT * FROM clientes");
        return rows;
    }
};

export default clienteRepository;
import { db } from "../configs/Database.js";

const produtoRepository = {
    criar: async (produto) => {
        const sql = `
            INSERT INTO produtos 
            (IdCategoria, Nome, Valor, CaminhoImagem) 
            VALUES (?, ?, ?, ?)
        `;
        const values = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.caminhoImagem
        ];

        const [rows] = await db.execute(sql, values);
        return rows;
    },

    editar: async (produto) => {
        const sql = `
            UPDATE produtos 
            SET IdCategoria=?, Nome=?, Valor=?, CaminhoImagem=? 
            WHERE Id=?
        `;
        const values = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.caminhoImagem,
            produto.id
        ];

        const [rows] = await db.execute(sql, values);
        return rows;
    },

    selecionar: async () => {
        const [rows] = await db.execute("SELECT * FROM produtos");
        return rows;
    },

    deletar: async (id) => {
        const [rows] = await db.execute(
            "DELETE FROM produtos WHERE Id=?",
            [id]
        );
        return rows;
    }
};

export default produtoRepository;
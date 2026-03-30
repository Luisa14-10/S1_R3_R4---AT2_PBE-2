import { db } from "../configs/Database.js";

const categoriaRepository = {
    criar:async (categoria) =>{
        const sql = 'INSERT INTO categorias (Nome, Descricao) VALUES (?, ?)';
        const values = [categoria.nome, categoria.descricao];
        const [rows] = await db.execute(sql, values);
        return rows;
    },
    editar:async (categoria) =>{
        const sql = 'UPDATE categorias SET Nome = ?, Descricao = ? WHERE Id = ?';
        const values = [categoria.nome, categoria.descricao, categoria.id];
        const [rows] = await db.execute(sql, values);
        return rows;
    },
    selecionar: async(id) => {
        const sql = 'SELECT * FROM categorias;';
        const [rows] = await db.execute(sql);
        return rows;
    },
    deletar: async (id) => {
        const sql = 'DELETE FROM categorias WHERE id = ?;';
        const values = [id];
        const [rows] = await db.execute(sql, values);
        return rows;
    }
}

export default categoriaRepository;
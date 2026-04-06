import { Cliente } from "../models/Cliente.js";
import clienteRepository from "../repositories/clienteRepository.js";
import { buscarEnderecoPorCep } from "../services/viaCepService.js";

const clienteController = {
    criar: async (req, res) => {
        try {
            const { nome, cpf, cep, telefones } = req.body;

            const cliente = Cliente.criar({
                nome,
                cpf,
                cep,
                telefones
            });

            const endereco = await buscarEnderecoPorCep(cep);

            const result = await clienteRepository.criar(cliente, endereco);

            res.status(201).json({ result });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    selecionar: async (req, res) => {
        try {
            const result = await clienteRepository.selecionar();
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default clienteController;
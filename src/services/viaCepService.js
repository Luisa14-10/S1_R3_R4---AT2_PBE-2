import axios from "axios";

export const buscarEnderecoPorCep = async (cep) => {
    const cleanCep = cep.replace(/\D/g, '');

    const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);

    if (response.data.erro) {
        throw new Error("CEP não encontrado");
    }

    return response.data;
};
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from 'uuid';

export const EnderecoContext = createContext();

export const useEnderecos = () => {
    return useContext(EnderecoContext);
}

export const EnderecoProvider = ({ children }) => {

    //Variável para armazenar e atualizar dados
    const [enderecos, setEnderecos] = useState([{ id: '1', nome: 'Rua Alvaro Chaves', numero: '2000', cep: '96000700', tipo: "residencial" }]);

    //Função para adicionar endereço
    const createEndereco = (nome, numero, cep, tipo) => {
        setEnderecos([...enderecos, { nome, numero, cep, tipo, id: uuid() }])
    };

    //Função para editar endereco
    const editarEndereco = (id, enderecoEditado) => {
        setEnderecos([...enderecos.map(endereco => endereco.id === id ? {...endereco, ...enderecoEditado} : endereco), ]);
    };

    return (
        <EnderecoContext.Provider value={{ enderecos, createEndereco, editarEndereco }}>
            {children}
        </EnderecoContext.Provider>
    )
}
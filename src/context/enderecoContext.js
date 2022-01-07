import { createContext, useContext, useState } from "react";

export const EnderecoContext = createContext();

export const useEnderecos = () => {
    return useContext(EnderecoContext);
}

export const EnderecoProvider = ({children}) => {

    //Variável para armazenar e atualizar dados
    const [enderecos, setEnderecos] = useState([{id: '1', nome: 'Rua Alvaro Chaves', numero: '2000', cep: '96000700', tipo: "residencial"}]);

    //Função para adicionar endereço
    const createEndereco = (nome, numero, cep, tipo) => {
        setEnderecos([...enderecos, {nome, numero, cep, tipo, id: "2"}])
    }

    return (
        <EnderecoContext.Provider value={{ enderecos, createEndereco }}>
            {children}
        </EnderecoContext.Provider>
    )
}
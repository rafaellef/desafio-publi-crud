import Layout from "../components/Layout";
import { useState } from "react";
import { useEnderecos } from "../context/enderecoContext";

//Formulario para cadastrar novo endereco
const EnderecoForm = () => {

    //Puxando Enderecos
    const [endereco, setEndereco] = useState({
        nome: '',
        numero: '',
        cep: '',
        tipo: '',
    });

    const { createEndereco } = useEnderecos();

    //Atualizando Enderecos
    const handleChange = e => {
        const {name, value} = e.target
        setEndereco({...endereco, [name]: value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        createEndereco(endereco.nome, endereco.numero, endereco.cep, endereco.tipo);
    }

    return (
        <Layout>

            <form
            onSubmit={handleSubmit} 
            className="flex flex-col w-full bg-gray-200 mt-20 justify-center items-center rounded-lg">
                <h1 className="text-xl py-2 font-semibold">Adicionar Endereço</h1>

                <input
                onChange={handleChange}
                name="nome" 
                type="text" 
                placeholder="Endereço" 
                className="w-9/12 py-3 px-4 m-5 rounded-lg" />

                <input 
                type="number"
                name="numero"
                onChange={handleChange} 
                placeholder="Número" 
                className="w-9/12 py-3 px-4 m-5 rounded-lg" />

                <input 
                type="number"
                name="cep"
                onChange={handleChange} 
                placeholder="CEP" 
                className="w-9/12 py-3 px-4 m-5 rounded-lg" />

                <select
                name="tipo"
                onChange={handleChange} 
                className="w-9/12 py-3 px-4 m-5 rounded-lg">
                    <option value="principal">Principal</option>
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="ferias">Férias</option>
                </select>

                <button className="bg-black hover:bg-zinc-700 px-4 py-2 rounded-lg text-white w-1/6 mb-5">
                    Salvar
                </button>
            </form>


        </Layout>
    )
}

export default EnderecoForm;
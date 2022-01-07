import { useEnderecos } from "../context/enderecoContext";
import Layout from "../components/Layout";
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { useRouter } from "next/router";

const Home = () => {

  //Importando enderecos
  const { enderecos, excluirEndereco } = useEnderecos();

  const {push} = useRouter();

  return (
    <Layout>
      <div className="flex justify-center">
        {
          enderecos.length === 0 ? (
            <h2>Sem endereços. Clique em Adicionar</h2>
          ) : (
            <div className="w-full">
              <div>
                {enderecos.map(endereco => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="bg-gray-200 px-20 py-5 m-2 flex justify-between items-center flex-wrap" key={endereco.id}>
                    <div>
                      <div className="flex justify-end items-center">
                        <h1 className="font-bold mr-4">{endereco.nome}</h1>
                        <button
                        onClick={() => push("/edit/" + endereco.id)} /*Usando push aqui para enviar usuário para página de edição de cada endereço*/
                        className="bg-blue-500 hover:bg-blue-400 px-3 py-1 inline-flex items-center rounded-md">
                          <FiEdit />
                        
                        </button>
                        <button
                        onClick={(e) => {
                          e.stopPropagation();
                          excluirEndereco(endereco.id);
                        }} 
                        className="bg-red-700 hover:bg-red-600 px-3 py-1 ml-4 mr-4 inline-flex items-center rounded-md">
                          <BsTrash />
                      
                        </button>
                      </div>
                      <p>Nº {endereco.numero}</p>
                      <p>CEP {endereco.cep}</p>
                    </div>
                    <p className="border-solid border-2 border-black px-2 py-1 rounded-lg items-center inline-block mt-4">{endereco.tipo}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </Layout>
  );
};

export default Home;



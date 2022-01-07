import { useEnderecos } from "../context/enderecoContext";
import Layout from "../components/Layout";

const Home = () => {

  //Importando enderecos
  const { enderecos } = useEnderecos();

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
                  <div className="bg-gray-200 px-20 py-5 m-2">
                    <h1 className="font-bold">{endereco.nome}</h1>
                    <p>{endereco.numero}</p>
                    <p>{endereco.cep}</p>
                    <p>{endereco.tipo}</p>
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
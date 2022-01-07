import { useEnderecos } from "../context/enderecoContext";
import Layout from "../components/Layout";

const Home = () => {

  //Importando enderecos
  const { enderecos } = useEnderecos();

  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  );
};

export default Home;
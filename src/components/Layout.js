import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEnderecos } from '../context/enderecoContext';

const Layout = ({ children }) => {

    //Utilizando router para redirecionar para página adicionar endereco
    const router = useRouter();

    const { enderecos } = useEnderecos();

    return (
        <div className="h-screen">
            <header className="flex px-28 py-5 bg-gray-200">
                <Link href='/' /*Utilizando Link para redirecionar para página inicial */>
                    <a>
                        <h1 className="font-black text-2xl">Endereços</h1>
                    </a>
                </Link>

                <div className="flex-grow text-right">
                    <button className="bg-black px-3 py-2 text-white rounded-lg hover:bg-zinc-700 inline-flex items-center" onClick={() => router.push('/novoEndereco')}>Adicionar <AiOutlinePlus className='ml-2' /></button>
                </div>
            </header>
            <main className="px-28 py-10">
                {children}
            </main>

        </div>
    )
}

export default Layout;
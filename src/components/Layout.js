import { AiOutlinePlus } from 'react-icons/ai';

const Layout = ({ children }) => {
    return (
        <div className="h-screen">
            <header className="flex px-28 py-5 bg-gray-200">
                <h1 className="font-black text-2xl">Endereços</h1>
                <div className="flex-grow text-right">
                    <button className="bg-black px-3 py-2 text-white rounded-lg hover:bg-zinc-700 inline-flex items-center">Adicionar <AiOutlinePlus className='ml-2' /></button>
                </div>
            </header>
            <main className="px-28">
                {children}
            </main>

        </div>
    )
}

export default Layout;
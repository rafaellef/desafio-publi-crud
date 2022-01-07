import { createContext, useContext } from "react";

export const EnderecoContext = createContext();

export const useEnderecos = () => {
    const context = useContext(EnderecoContext);
    return context;
}

export const EnderecoProvider = ({children}) => {

    return (
        <EnderecoContext.Provider>
            {children}
        </EnderecoContext.Provider>
    )
}
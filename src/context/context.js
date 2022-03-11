import { createContext, useContext } from "react";

// app context
const AppContext = createContext();
export const AppProvider = AppContext.Provider;
export const UseAppContext = () => {
    return useContext(AppContext);
}

// match context
const keyContext = createContext();
export const KeyProvider = keyContext.Provider;
export const UseKeyContext = () => {
    return useContext(keyContext);
}

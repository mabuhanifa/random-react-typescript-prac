import React, { createContext, useContext } from "react";
type StateType = {
    state: number
}
const NewContext = createContext({} as StateType);

export const NewProvider = ({ children }: { children: React.ReactNode }) => {
    const newState = {
        state: 0
    }
    return <NewContext.Provider value={newState}>{children}</NewContext.Provider>
}

export const useNew = () => {
    return useContext(NewContext)
}
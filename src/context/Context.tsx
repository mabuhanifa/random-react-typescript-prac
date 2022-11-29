import { createContext, ReactNode } from "react";
type ContextChild = {
    children: ReactNode
}

export default function Context({ children }: ContextChild) {
    const TodoContext = createContext({});
    return (
        <TodoContext.Provider value={{}}>Context</TodoContext.Provider>
    )
}

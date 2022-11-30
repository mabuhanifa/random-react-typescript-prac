import { createContext, ReactNode, useContext, useReducer } from "react";

export type ContextChild = {
    children: ReactNode
}
export type StateType = {
    id: number;
    todo: string;
}
export type Action =
    { type: "ADD_TODO", todo: string } |
    { type: "REMOVE_TODO", id: number };

export type MainState = {
    state: StateType[];
    dispatch: React.Dispatch<Action>
}
const initialState: StateType[] = [{
    id: 0,
    todo: "first"
}]

const reducer = (state: StateType[], action: Action) => {
    // switch (action.type) {
    //     case "ADD_TODO":
    //         return [
    //             ...state,
    //             {
    //                 id: state.length + 1,
    //                 todo: action.todo
    //             },
    //         ];
    //     case "REMOVE_TODO":
    //         return state.filter(({ id }) => id !== action.id);
    //     default:
    //         throw new Error();
    // }
}
const ShopContext = createContext({} as MainState);
export default function Context({ children }: ContextChild) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const store = { state, dispatch }
    return (
        <ShopContext.Provider value={store}>{children}</ShopContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(ShopContext);
}
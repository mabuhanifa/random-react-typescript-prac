import { createContext, useContext, useReducer } from "react";
import { Action, ContextChild, MainState, StateType } from "../types/types";

const initialState: StateType[] = [{
    id: 0,
    todo: "first"
}]

const reducer = (state: StateType[], action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: state.length + 1,
                    todo: action.todo
                },
            ];
        case "REMOVE_TODO":
            return state.filter(({ id }) => id !== action.id);
        default:
            throw new Error();
    }
}
const TodoContext = createContext({} as MainState);
export default function Context({ children }: ContextChild) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const store = { state, dispatch }
    return (
        <TodoContext.Provider value={store}>{children}</TodoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(TodoContext);
}
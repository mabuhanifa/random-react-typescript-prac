import { createContext, ReactNode, useContext, useReducer } from "react";
type ContextChild = {
    children: ReactNode
}
type StateType = {
    id: number;
    todo: string;
}
type Action =
    { type: "ADD_TODO", todo: string } |
    { type: "REMOVE_TODO", id: number };

type MainState = {
    state: StateType[];
    dispatch: React.Dispatch<Action>
}

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
import { useReducer, useState } from 'react';
type StateType = {
    id: number;
    todo: string;
}
type Action =
    { type: "ADD_TODO", todo: string } |
    { type: "REMOVE_TODO", id: number };

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
export default function NewReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState("")
    console.log(state);
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={() => dispatch({
                    type: 'ADD_TODO',
                    todo: text
                })}>Add todo</button>
            </div>


            {
                state.map((s) => <div>
                    {s.todo}
                </div>
                )
            }</div>
    )
}

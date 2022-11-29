import { useState } from 'react';
import { useTodo } from '../context/Context';

export default function NewReducer() {
    const { state, dispatch } = useTodo();
    const [text, setText] = useState("");
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
                state.map((s) =>
                    <div key={s.id}>
                        {s.todo}
                        <button onClick={() => dispatch({
                            type: 'REMOVE_TODO',
                            id: s.id
                        })}>Delete</button>
                    </div>
                )
            }</div>
    )
}

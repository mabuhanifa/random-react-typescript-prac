import { useState } from 'react';
import { useShop } from '../context/ShopContext';

export default function NewReducer() {
    const { state, dispatch } = useShop();
    console.log(state, dispatch);
    const [text, setText] = useState("");
    return (
        <div>

        </div>
    )
}

import { useState } from 'react';
type StateType = {
    id: string;
}
export default function Random() {
    const [random, setRandom] = useState<StateType>({} as StateType);
    const setVal = () => {
        setRandom({
            id: " random"
        })
    }
    return (
        <div>Random</div>
    )
}

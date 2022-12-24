import { useState } from 'react';
type StateType = {
    id: string;
}
export default function Random() {
    const [random, setRandom] = useState<StateType>({
        id: 'random',
    });
    return (
        <div>Random</div>
    )
}

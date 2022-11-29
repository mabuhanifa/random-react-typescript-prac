import { useState } from 'react';
import './App.css';
interface User {
  name: string;
  email: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<User>({ name: "", email: "", age: 0 });


  return (
    <div>
      {user.age}
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>+</button>
      <button onClick={() => setUser({ ...user, age: user.age - 1 })}>-</button>
    </div>
  )
}

export default App

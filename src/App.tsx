import { useCallback } from 'react';
import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';
import { useNew } from './components/NewContext';
import Head from './components/ReactFunctionComponent';
import UL from './typeComponent/GenComp';



function App() {
  const todos = ["1", "2", "3", "4"];
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);
  const { state } = useNew();
  console.log(state)
  return (
    <div>
      <Heading title={"Introduction"} />
      <Head >
        hello
      </Head>
      <Box>
        Hello There
      </Box>
      <UL items={todos} render={
        (todo) => (
          <>
            {todo}
            <button onClick={() => alert(todo)}>Alert</button>
          </>
        )
      } />
    </div>
  )
}

export default App

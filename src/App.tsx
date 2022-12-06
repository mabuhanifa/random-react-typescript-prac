import { useCallback } from 'react';
import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';
import Head from './components/ReactFunctionComponent';
import UL from './typeComponent/GenComp';



function App() {
  const todos = ["1", "2", "3", "4"];
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);
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
          </>
        )
      } />
    </div>
  )
}

export default App

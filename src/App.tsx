import { useCallback } from 'react';
import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';
import List from './components/List';
import Head from './components/ReactFunctionComponent';



function App() {
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
      <List items={["1", "2", "3", "4"]} onClick={onListClick} />
    </div>
  )
}

export default App

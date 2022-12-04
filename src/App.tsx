import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';
import Head from './components/ReactFunctionComponent';


function App() {
  return (
    <div>
      <Heading title={"Introduction"} />
      <Head >
        hello
      </Head>
      <Box>
        Hello There
      </Box>
    </div>
  )
}

export default App

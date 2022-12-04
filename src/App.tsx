import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';
import Head from './components/ReactFunctionComponent';

const List: React.FunctionComponent<{ items: string[] }> = ({ items }) => (
  <ul>
    {
      items.map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
  </ul>
)

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
      <List items={["1", "2", "3", "1", "4"]} />
    </div>
  )
}

export default App

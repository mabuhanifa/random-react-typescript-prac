import './App.css';
import NewReducer from './components/NewReducer';
import UseReducer from './components/UseReducer';
import Context from './context/Context';



function App() {
  return (
    <Context>
      <UseReducer />
      <NewReducer />
    </Context>)
}

export default App

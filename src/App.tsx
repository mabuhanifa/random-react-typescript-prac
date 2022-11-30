import './App.css';
import NewReducer from './components/NewReducer';
import UseReducer from './components/UseReducer';
import ShopContext from './context/ShopContext';



function App() {
  return (
    <ShopContext>
      <UseReducer />
      <NewReducer />
    </ShopContext>)
}

export default App

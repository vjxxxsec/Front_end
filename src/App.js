import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Hookcakecontainer from './Components/Hookcakecontainer';
import IcecreamContainer from './Components/IcecreamContainer';
import Itemcontainer from './Components/Itemcontainer';

function App() {
  return (
<Provider store={store}>
  <div className="App">
  <Itemcontainer  />
  <Itemcontainer icecreams/>
  <Hookcakecontainer/>
  <CakeContainer/>
  <IcecreamContainer/>
  </div>
</Provider>
   
  );
}

export default App; 

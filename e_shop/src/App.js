import './App.css';
import Header from './Containers/Header';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import ProductComponent from './Containers/ProductComponent';
import ProductListing from './Containers/ProductListing';
import Productdetail from './Containers/Productdetail';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path='/' exact component={ProductListing}></Route>
      <Route path='/product/:productid' exact component={Productdetail}></Route>
      <Route>404 not found</Route>
      </Switch>
      </Router>
    </div>
  );
}
export default App;

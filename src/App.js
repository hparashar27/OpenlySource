import './App.css';
// import { Navbar, Header, Footer } from './Components';
// import from "./Components/Header/About";
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Opportunities from './Components/Opportunities/Opportunities';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
        <Router>
          <Navbar/>
          <Switch>
        <Route exact path="/">
          <Home/>
        </Route>  
        <Route exact path="/Opportunities">
        <Opportunities/>
        </Route>
          </Switch>
        </Router>
  );
}

export default App;

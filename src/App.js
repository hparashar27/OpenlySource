import "./App.css"
import logo from "./assets/Official_openlySource_logo.png"
import { Navbar,About,UnderConstruction } from "./Components";
// import from "./Components/Header/About";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
 <Router>
      <Navbar/>
      <Route exact path="/about" component={UnderConstruction} />
      <Route exact path="/Members" component={UnderConstruction} />
      <Route exact path="/Aim" component={UnderConstruction} />
      <Route exact path="/Sign-up" component={UnderConstruction} />
      <Route exact path="/Log-in" component={UnderConstruction} />
</Router>
    </div>
    
  );
}

export default App;

import "./App.css"
import { Navbar,Header } from "./Components";
// import from "./Components/Header/About";
import { BrowserRouter as Router,  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
 <Router>
      <Navbar/>
      <Header/> 
</Router>
    </div>
    </div>
  );
}

export default App;

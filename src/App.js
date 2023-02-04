import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Opportunities from './Components/Opportunities/Opportunities';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Opportunities" element={<Opportunities />} />
                <Route path="/Aboutus" element={<UnderConstruction />} />
                <Route path="/Members" element={<UnderConstruction />} />
                <Route path="/Log-in" element={<Login />} />
                <Route path="/Sign-up" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
};

const Main = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

    return (
        <div>
            {!isAuthPage && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    );
};

export default App;

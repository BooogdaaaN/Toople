import "./stylesheets/App.scss";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Courses from "./pages/Courses.js";
import Login from "./pages/Login.js";

import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <div className="app">
            <div className="app__container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;

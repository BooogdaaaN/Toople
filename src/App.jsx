import { BrowserRouter } from "react-router-dom";

import "./stylesheets/App.scss";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Login from "./pages/Login.jsx";

import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;

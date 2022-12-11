import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;

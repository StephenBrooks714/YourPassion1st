import Home from './pages/HomePage.jsx'
import About from './pages/AboutPage.jsx'
import Login from './components/Login.jsx'
import {Route, Routes} from "react-router-dom";
import NavaBar from "./components/NavBar.jsx";

function App() {

  return (
    <>
        <NavaBar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
            <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </>
  )
}

export default App

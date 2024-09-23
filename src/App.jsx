import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NavBar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <h1>Hello Router DOM</h1>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

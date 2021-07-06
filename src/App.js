import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebustLanding from "./Pages/DebustLanding/DebustLanding";
import SearchPage from "./Pages/SearchPage/SearchPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<DebustLanding />} />
            <Route path="/search_page" element={<SearchPage />} />
          </Routes>
        </Base>
      </div>
    </BrowserRouter>
  );
}

export default App;

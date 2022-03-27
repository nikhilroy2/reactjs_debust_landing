import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebustLanding from "./Pages/DebustLanding/DebustLanding";
import SearchPage from "./Pages/SearchPage/SearchPage";
import PricingPlan from "./Pages/PricingPlan/PricingPlan";
import SelectedNFTPage from "./Pages/SelectedNFTPage/SelectedNFTPage";
import LoginModal from "./Components/LoginModal/LoginModal";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<DebustLanding />} />
            <Route path="/search_page" element={<SearchPage />} />
            <Route path="/pricing_page" element={<PricingPlan />} />
            <Route path="/selected_nft" element={<SelectedNFTPage />} />
          </Routes>


          {/* Login Modal Component */}
          <LoginModal></LoginModal>
        </Base>
      </div>
    </BrowserRouter>
  );
}

export default App;

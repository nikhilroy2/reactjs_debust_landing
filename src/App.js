import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
import DebustLanding from "./Pages/DebustLanding/DebustLanding";
function App() {
  return (
    <div className="App">
      <Base>
        <DebustLanding></DebustLanding>
      </Base>
    </div>
  );
}

export default App;

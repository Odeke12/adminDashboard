import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topBar/TopBar";
import "./app.css"
import Home from "./components/pages/Home"

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>

    </div>
  );
}

export default App;

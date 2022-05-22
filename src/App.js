import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topBar/TopBar";
import "./app.css"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";

function App() {
  return (
    <Router>
    <TopBar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}> 
          </Route>
          <Route path="/users" element={<UserList />}>
          </Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;

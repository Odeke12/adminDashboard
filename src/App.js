import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topBar/TopBar";
import "./app.css"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";

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
          <Route path="/user/:userId" element={<User />}> 
          </Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;

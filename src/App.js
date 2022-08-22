import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {
  Bookmarks,
  Explore,
  Home,
  List,
  Messages,
  More,
  Notification,
  Profile,
} from "./pages";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="flex relative bg-red-300">
          <div className="w-[300px] fixed sidebar border-r-2 border-red-700 bg-white">
            <Sidebar />
          </div>
          <div className="w-full ml-[300px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/list" element={<List />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/more" element={<More />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

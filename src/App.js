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
import message from "./data/message.png";
import more from "./data/more.png";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <BrowserRouter>
        <div className="flex relative">
          <div className="fixed bottom-0 right-5 rounded-t-lg z-50 shadow-black shadow-sm bg-white">
            <div className="flex gap-x-44 p-3 ">
              <div className="text-2xl font-bold">Messages</div>
              <div className="flex gap-x-5">
                <img src={message} alt="" className="h-7 w-7" />
                <img src={more} alt="" className="h-7 w-7" />
              </div>
            </div>
          </div>
          <div className=" w-[350px] fixed sidebar border-r-[1px] border-gray-200 bg-white top-0 ">
            <Sidebar />
          </div>
          <div className="w-full ml-[350px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/mores" element={<Messages />} />
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

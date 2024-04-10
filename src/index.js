import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Demo from "./component/Demo";
import Pages from "./component/Pages";
import Account from "./component/Account";
import MyNetwork from "./component/MyNetwork";
import NoPage from "./component/NoPage";
import HomeClassic from "./component/HomeClassic";
import "bootstrap/dist/css/bootstrap.min.css";
import Setting from "./component/Setting";
import Messages from "./component/Messages";
import CreatePage from "./component/CreatePage";
import SigninPage from "./component/SigninPage";
import Example from "./component/Example";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Demo />} />
          <Route path="pages" element={<Pages />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
          <Route path="mynetwork" element={<MyNetwork />} />
          <Route path="homeclassic" element={<HomeClassic />} />
          <Route path="setting" element={<Setting />} />
          <Route path="messages" element={<Messages />} />
          <Route path="createpage" element={<CreatePage />} />
          <Route path="signinpage" element={<SigninPage />} />
          <Route path="example" element={<Example />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

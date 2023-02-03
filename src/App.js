import Login from "./Login";
import Signup from "./Signup";
import Validations from "./Validations";
import Forgetpsd from "./Forgetpsd";
import Resetpsd from "./Resetpsd";
import Createacc from "./Createacc";
import Emailsuc from "./Emailsuc";
import Popups from "./Popups";
import Role from "./Role";

import EmailVer from "./DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Intern from './Intern'
import DashBoard from "./DashBoard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/validations" element={<Validations />} />
          <Route path="/Forgetpsd" element={<Forgetpsd />} />
          <Route path="/Resetpsd" element={<Resetpsd />} />
          <Route path="/Createacc" element={<Createacc />} />
          <Route path="/Emailsuc" element={<Emailsuc />} />
          <Route path="/Popups" element={<Popups />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/EmailVer" element={<EmailVer />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/Intern" element={<Intern/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

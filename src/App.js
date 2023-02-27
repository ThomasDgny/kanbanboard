import { Route, Routes } from "react-router-dom";
import Board from "./components/pages/kanbanBoard/Board";
import { AuthContextProvider } from "./context/UserAuth";
import { ProjectContextProvider } from "./context/ProjectOp";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUpPage";
import Dasboard from "./components/pages/Home/Dasboard";
import CreateProject from "./components/pages/CreateProject/CreateProject";
import LandingPage from "./components/pages/main/MainLandingPage";
import NavbarSwitched from "./components/elements/navSwitch/NavbarSwitched";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProjectContextProvider>
          <NavbarSwitched />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dasboard />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/board/:id" element={<Board />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </ProjectContextProvider>
      </AuthContextProvider>

    </div >
  );
}

export default App;

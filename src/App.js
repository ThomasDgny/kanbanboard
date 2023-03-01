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
import ProtectedRoute from "./context/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProjectContextProvider>
          <NavbarSwitched />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={<ProtectedRoute child={<Dasboard />} />} />
            <Route path="/create-project" element={<ProtectedRoute child={<CreateProject />} />} />
            <Route path="/board/:id" element={<ProtectedRoute child={<Board />} />} />
          </Routes>
        </ProjectContextProvider>
      </AuthContextProvider>

    </div >
  );
}

export default App;

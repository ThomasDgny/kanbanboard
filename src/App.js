import { Navigate, Route, Routes } from "react-router-dom";
import Board from "./components/pages/kanbanBoard/Board";
import { ProjectContextProvider } from "./context/ProjectOp";
import SignIn from "./components/pages/SignIn/SignIn";
import Dasboard from "./components/pages/Home/Dasboard";
import CreateProject from "./components/pages/CreateProject/CreateProject";
import LandingPage from "./components/pages/main/MainLandingPage";
import NavbarSwitched from "./components/elements/navSwitch/NavbarSwitched";
import { AuthContextProvider, UserAuth } from "./context/UserAuth";
import PublicNavbar from './components/elements/navbar/Navbar';
import SignUp from "./components/pages/SignUp/SignUpPage";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function AuthRoutes() {
  return (

    <Routes>
      <PublicNavbar />
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/board/:id" element={<Board />} />
      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

function App() {
  const user = UserAuth()

  return (
    <div className="App">
      <AuthContextProvider>
        <ProjectContextProvider>

          <NavbarSwitched />
          {user ? <AuthRoutes /> : <PublicRoutes />}

        </ProjectContextProvider>
      </AuthContextProvider>

    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Board from "./components/pages/kanbanBoard/Board";
import { AuthContextProvider } from "./context/UserAuth";
import { ProjectContextProvider } from "./context/ProjectOp";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUpPage";
import Dasboard from "./components/pages/Home/Dasboard";
import CreateProject from "./components/pages/CreateProject/CreateProject";
import SideBar from "./components/elements/sideBar/SideBar";
import LnadingPage from "./components/pages/main/MainLandingPage";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProjectContextProvider>
          <SideBar />
          <Routes>
            <Route path="/LnadingPage" element={<LnadingPage />} />
            <Route path="/" element={<Dasboard />}/>
            <Route path="/CreateProject" element={<CreateProject />} />
            <Route path="/Board/:id" element={<Board />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </ProjectContextProvider>
      </AuthContextProvider>

    </div >
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import Board from "./components/pages/kanbanBoard/Board";
import { AuthContextProvider } from "./context/UserAuth";
import { ProjectContextProvider } from "./context/ProjectOp";
import SignIn from "./components/pages/SignIn/SignIn";
import Navbar from "./components/elements/navbar/Navbar";
import SignUp from "./components/pages/SignUp/SignUpPage";
import Dasboard from "./components/pages/Home/Dasboard";
import CreateProject from "./components/pages/CreateProject/CreateProject";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProjectContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dasboard />} />
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
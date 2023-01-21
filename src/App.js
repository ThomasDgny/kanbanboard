import { Route, Routes } from "react-router-dom";
import Board from "./components/pages/kanbanBoard/Board";
import { AuthContextProvider } from "./context/UserAuth";
import { FirebaseProvider } from "./repository/FirebaseContext";
import SignIn from "./components/pages/SignIn/SignIn";
import Navbar from "./components/elements/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FirebaseProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </FirebaseProvider>
      </AuthContextProvider>

    </div >
  );
}

export default App;
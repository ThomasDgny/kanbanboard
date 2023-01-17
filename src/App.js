import { Route, Routes } from "react-router-dom";
import Board from "./components/pages/kanbanBoard/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
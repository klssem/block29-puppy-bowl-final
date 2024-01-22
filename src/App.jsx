import "./App.css";
import Players from "./components/players";
import Player from "./components/player";
import CreatePlayerForm from "./components/SubmitPlayer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Players />} />
      <Route path="/player/:playerId" element={<Player />} />
      <Route path="/submit-player" element={<CreatePlayerForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;

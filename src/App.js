import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invit from "./components/Invit";
import TextInvit from "./components/TextInvit";
import Help from "./components/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invit />} />
        <Route path="/invitation" element={<TextInvit />} />
        <Route path="/aide" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invit from "./components/Invit";
import TextInvit from "./components/TextInvit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invit />} />
        <Route path="/textinvit" element={<TextInvit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

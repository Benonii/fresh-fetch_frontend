import './App.css';
import ProducePage from './pages/ProducePage';
import Basket from './pages/Basket';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ProducePage />} />
          <Route path="/produce" element={<ProducePage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;

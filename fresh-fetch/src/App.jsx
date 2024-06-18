import './App.css';
import Produce from './pages/Produce';
import Basket from './pages/Basket';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Produce />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;

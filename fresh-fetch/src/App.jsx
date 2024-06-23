import ProducePage from './pages/ProducePage';
import Basket from './pages/Basket';
import Summary from './pages/Summary'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      {/* App contains the routes to all the separate pages of the app */}
      <BrowserRouter>
        <Routes>
          <Route index element={<ProducePage />} />
          <Route path="/produce" element={<ProducePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

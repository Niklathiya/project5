import './App.css';
import { BrowserRouter } from "react-router-dom";
import {
  Routes, Route
} from "react-router-dom"
import Home from './pages/Home';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/Feedback" element={<Feedback />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

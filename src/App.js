import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import {
  Routes, Route
} from "react-router-dom"
import Home from './pages/Home';
import Layout from './Layout';
import About from './pages/About';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/Departments' element={<Layout><Departments /></Layout>} />
          <Route path='/Doctors' element={<Layout><Doctors/></Layout>} />
          <Route path='/About' element={<Layout><About /></Layout>} />
          <Route path='/Contact' element={<Layout><Contact /></Layout>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Forgot' element={<Forgot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

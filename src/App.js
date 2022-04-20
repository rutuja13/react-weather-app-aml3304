import Contact from './components/Contact';
import Weather from './components/Weather';
import About from './components/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import "./App.css";



function App() {

  /**return (
    <Weather>

    </Weather>
  )**/
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Weather />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
    
}

export default App;
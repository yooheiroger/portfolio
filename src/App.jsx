import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
       <Header />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
       

        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
     
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
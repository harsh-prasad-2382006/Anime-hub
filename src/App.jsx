import './App.css'
import Home from './pages/Home'
import Anime from './pages/Anime'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  // Using BrowserRouter
import NavigationBar from './components/NavigationBar'
import NotFound from './pages/NotFound'
import Fav from './components/Fav'
import { AnimeProvider } from './context/AnimeContext'

function App() {
  return (
    <AnimeProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AnimeProvider>
  )
}

export default App;

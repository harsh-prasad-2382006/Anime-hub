import './App.css'
import Home from './pages/Home'
import Anime from './pages/Anime'
import { HashRouter as Router,Route,Routes } from 'react-router'
import NavigationBar from './components/NavigationBar'
import NotFound from './pages/NotFound'
import Fav from './components/Fav'
import {AnimeProvider} from './context/AnimeContext'

function App() {
  return(
    <>
    <AnimeProvider>
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="home" element={<Home/>}></Route>
        <Route path="anime" element={<Anime/>}></Route>
        <Route path="fav" element={<Fav/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter> 
    </AnimeProvider>   
    </>
  )
}

export default App

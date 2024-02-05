import './index.scss'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<MainPageAsync />} />
        <Route path="/about" element={<AboutPageAsync />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
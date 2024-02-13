import './styles/index.scss'
import {Link, Routes, Route } from 'react-router-dom';
import { Suspense} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const {theme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme as string])}>
     <Navbar/>
     <AppRouter/>
    </div>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Route, Routes} from "react-router";
import MovieListPage from './pages/MoviesListPage.jsx';
import MovieDetailPage from './pages/MoviesDetailPage.jsx';
import WatchListPage from './pages/WatchListPage.jsx';
import Header from './components/header.jsx';

createRoot(document.getElementById('root')).render(
  <App />
)

import { StrictMode, use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header'
import MovieListPage from './pages/MoviesListPage'
import MovieDetailPage from './pages/MoviesDetailPage'
import WatchListPage from './pages/WatchListPage'

function App() {
  const [watchList,setWatchList] = useState([])

  return (
    <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {<Header />}
      <Routes>
          {/*Page 1 : Movie List */}
          <Route path= "/" element={<MovieListPage  watchList = {watchList} setWatchList = {setWatchList}/>}/>
          {/*Page 2 : Movie Detail */}
          <Route path='/details' element={<MovieDetailPage />}/>
          {/*Page 3 : Watch List */}
          <Route path='/watchlist' element={< WatchListPage  watchList = {watchList} setWatchList = {setWatchList}/>} />

          <Route path='*' element={<h1>Page not Found</h1>} />
      </Routes>
      
    </StrictMode>
  </BrowserRouter>
  )
}

export default App

import { StrictMode, use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header'
import MovieListPage from './pages/MoviesListPage'
import MovieDetailPage from './pages/MoviesDetailPage'
import WatchListPage from './pages/WatchListPage'
import WatchListProvider from './assets/context/watchListContext'

function App() {

  return (
    <BrowserRouter>
      <WatchListProvider>
        <StrictMode>
          {/* <App /> */}
          {<Header />}
          <Routes>
              {/*Page 1 : Movie List */}
              <Route path= "/" element={<MovieListPage />}/>
              {/*Page 2 : Movie Detail */}
              <Route path='/details' element={<MovieDetailPage />}/>
              {/*Page 3 : Watch List */}
              <Route path='/watchlist' element={< WatchListPage />} />

              <Route path='*' element={<h1>Page not Found</h1>} />
          </Routes>
          
        </StrictMode>
      </WatchListProvider>
    </BrowserRouter>
  )
}

export default App

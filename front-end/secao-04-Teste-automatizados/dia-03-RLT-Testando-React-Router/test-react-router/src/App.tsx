import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About />} />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App

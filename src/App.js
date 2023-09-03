import React from 'react';
import './App.css'

import Header from './pages/header/Header';
import Content from './pages/content/Content';
import Footer from './pages/footer/Footer';


const App = () => {
  return (
    <div className='App'>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default App

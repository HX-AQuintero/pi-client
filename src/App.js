import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateDog from './components/CreateDog';
import Details from './components/Details';

function App() {
  return (
    <>
    <div className='App'>
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dog' element={<CreateDog/>}/>
            <Route path='/dogs/:id' element={<Details/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;

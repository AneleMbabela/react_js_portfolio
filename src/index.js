import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Works from './components/Works';


ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/section' element={<Section/>}/>
          <Route path='/works' element={<Works/>}/>

        </Routes>
    </Router>,
  document.getElementById('root')
);


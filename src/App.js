import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTutorial from './components/AddTutorial';
import Tutorial from './components/tutorial';
import TutorialList from './components/TutorialList';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <Link to="/tutorials" className='navbar-brand'>
            NBU
          </Link>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'> 
              <Link to="/tutorials" className='nav-link'>
                บทเรียน
              </Link>
            </li>
            <li className='nav-item'> 
              <Link to="/add" className='nav-link'>
                เพิ่มบทเรียน
              </Link>
            </li>
            <li className='nav-item'>  
              <Link to="/about" className='nav-link'>
                เกี่ยวกับ
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<TutorialList />} />
            <Route path='/tutorials' element={<TutorialList />}/>
            <Route path='/add' element={<AddTutorial />}/>
            <Route path='/tutorial/:id'element={<Tutorial />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </>
    )
  }
}
 
export default App;

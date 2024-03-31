import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Complaints from './components/Complaints';
import Suggestions from './components/Suggestions';
import Home from './components/Home';
import ComplaintForm from './components/ComplaintForm';
import MyComponent from './components/MyComponent';
import RegisterForm from './RegisterForm';
import LoginButton from './LoginButton';
import muhtarliklar from './data/muhtarliklar.json';
import './App.css';

function App() {


  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h2><span class="logo-default"> <img src="https://www.bursa.bel.tr/assets/images/logo_dark1.png" width="130px" alt="Bursa " />
              </span> Ana Sayfa</h2>
            </Link>
               
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <h4><Link className="nav-link" to="/complaints"></Link></h4>
                </li>
                <li className="nav-item">
                  <h4><Link className="nav-link" to="/suggestions"></Link></h4>
                  
                     
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
        

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Routes>
        
        <LoginButton />
           
          
      
          <div className="row justify-content-center">
            <div className="col-md-6">
              <RegisterForm />
            </div>
          </div>
          
          <ComplaintForm />

          <MyComponent />
          
        </div>
      </div>
    </Router>
  );
}

export default App;


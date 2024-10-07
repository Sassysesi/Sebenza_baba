//import React from 'react'
//import Navbar from './Components/Navbar/Navbar'
//import Features from './Components/Features/Features'
//import SignUpSection from './Components/SignUpSection/SignUpSection'


//const App = () => {
  //return (
    //<div className='container' >
      //<Navbar/>
      //<Features/>
      //<SignUpSection/>
    //</div>
  //)
//}

//export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import AddJob from './Components/AddJob';
import JobList from './Components/JobList';
import JobDetails from './Components/JobDetails';
import Features from './Components/Features/Features';


function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-job">Add Job</Link>
            <Link to="/jobs">Job Listings</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
          </Routes>
        </main>
        
      </div>
      <Features/>
    </Router>
    
  );
}

export default App;

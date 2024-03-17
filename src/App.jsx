import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Label from './pages/Label';
import NewsFeed from './pages/NewsFeed';
import Footer from './pages/Footer';
import AboutUs from './pages/subpages/AboutUs';
import WhyAugusta from './pages/subpages/WhyAugusta';
import ContactUs from './pages/subpages/ContactUs';
import Loader from './pages/Loader';
import Blog from './pages/subpages/Blog'
import AirportManagement from './pages/subpages/AirportManagement';
function App() {

  
  return (
    
    <div>
      
    
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/label" element={<Label />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whyaugusta" element={<WhyAugusta></WhyAugusta>} />
        <Route path='/contactForm' element={<ContactUs></ContactUs>}/>
        <Route path='/loader' element={<Loader></Loader>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/airportmanagement' element={<AirportManagement></AirportManagement>}/>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

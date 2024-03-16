import './css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c1 from './assets/IMG-20240223-WA0001.jpg';
import c2 from './assets/IMG-20240223-WA0002.jpg';
import About from './About';
import Courses from './Courses';
import Label from './Label';
import NewsFeed from './NewsFeed';
import Header from './Header';
import Footer from './Footer';

function Home() {
  
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
   
    <div style={{background:'#eee5e9'}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <div className="home-1">
            <div className="home1_1">
                <h1>Augusta <span style={{color:'#55042a'}}>Certification Courses</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus porro laboriosam quasi accusantium officia autem magnam voluptas quod nostrum deleniti? Modi, pariatur! Dolorum est optio quae neque consequatur cupiditate a!</p>
                <img src="/src/pages/assets/Admission-Open-Limited-Seats.png" alt=""/>
                <div className="buttons">
                    <button>Contact Us</button>
                    <button >Courses</button>
                </div>
            </div>
            <div className="home1_2">
            <img src={c1} alt="" style={{width:'35rem',height:'30rem'}}/>

            </div>

        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <div className="home-1">
            <div className="home1_1">
                <h1>The Perfect Opportunity To  <span style={{color:'#55042a'}}>Kick Start Your Career</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus porro laboriosam quasi accusantium officia autem magnam voluptas quod nostrum deleniti? Modi, pariatur! Dolorum est optio quae neque consequatur cupiditate a!</p>
                <img src="/src/pages/assets/Admission-Open-Limited-Seats.png" alt=""/>
                <div className="buttons">
                    <button>Contact Us</button>
                    <button >Why Choose US?</button>
                </div>
            </div>
            <div className="home1_2">
            <img src={c2} alt="" style={{width:'35rem',height:'30rem'}}/>
            </div>

        </div>
       
      </Carousel.Item>
      {/* <Carousel.Item>
      <img src={c2} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
   
    </div>
     <About></About>
     <Courses></Courses>
     <Label></Label>
     <NewsFeed></NewsFeed>
   
     </>
  )
}


export default Home
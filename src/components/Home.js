import React, {useState,useEffect} from 'react';
import './Home.css';





function Home() {

//Array of images
const images = Array.from({ length: 225 }, (_, i) => `${process.env.PUBLIC_URL}/tripimage/yercaudtrip${i+1}.jpg`);

// Print the images in console
//console.log(images);

// State to track current image index
const [currentIndex, setCurrentIndex] = useState(0);

// Delay in milliseconds (e.g., 3000ms = 3 seconds)
const delay = 3000;

// Effect to handle image switching
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, delay);

  // Cleanup interval on component unmount
  return () => clearInterval(timer);
}, [images.length]);

  return (
    <section>
      <h2>Home</h2>
      <p>Welcome to Trip Adventure! Plan.Explore.Remember</p>

      <div style={{ textAlign: 'center' }}>
      <h2>Yercaud Trip</h2>
      <img
        src={images[currentIndex]}
        alt={`Slideshow ${currentIndex + 1}`}
        style={{width: '320px', height: '320px',borderRadius : '15px',objectFit : 'cover', animation: 'fade 1s ease-in-out'}}
      />
    </div>
    
    </section>
  );
}

export default Home;
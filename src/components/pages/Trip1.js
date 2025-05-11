
import './Trip1.css'; // Import the styles

import image1 from '../images/trip1/20240330_160959.jpg'
import image2 from '../images/trip1/20240330_161001.jpg'
import image3 from '../images/trip1/20240330_180407.jpg'
import image4 from '../images/trip1/20240330_180411.jpg'
import image5 from '../images/trip1/20240330_180424.jpg'
import image6 from '../images/trip1/20240330_180426.jpg'
import image7 from '../images/trip1/20240330_180427.jpg'
import image8 from '../images/trip1/20240330_180821.jpg'
import image9 from '../images/trip1/20240330_180833.jpg'
import image10 from '../images/trip1/20240330_180835.jpg'
import image11 from '../images/trip1/20240330_180914.jpg'

const pictures = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11

  // Add as many as you like!
];

const Trip1 = () => {
  return (
    <section className="gallery-wrapper">
      {/* <h2 className="gallery-title">Our Travel Memories ✈️</h2> */}
      <div className="gallery-container">
        {pictures.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Trip photos ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trip1;

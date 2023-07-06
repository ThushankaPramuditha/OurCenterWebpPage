import React from 'react';

function OurCenter() {
  return (
    <>
      <main>
        <div className="OurCenter">
          <div className="description-1">
            <div className="accomodation">
              <div className="card">
                <img src="images/accomodation.jpeg" alt="accomodation" />
                <h2>Accommodation</h2>
                <p>Stay in comfortable and well-equipped rooms during your quarantine period.</p>
              </div>
            </div>

            <div className="MedicalCare">
              <div className="card">
                <img src="images/medicare.jpg" alt="medical Care" />
                <h2>Medical Care</h2>
                <p>Our team of healthcare professionals provides essential medical care and monitoring.</p>
              </div>
            </div>

            <div className="NutriousMeal">
              <div className="card">
                <img src="images/meals.jpg" alt="Nutrious meals" />
                <h2>Nutritious Meals</h2>
                <p>We offer balanced and nutritious meals, taking into consideration your dietary requirements.</p>
              </div>
            </div>
          </div>

          <div className="description-2">
            <div className="BasicAmenties">
              <div className="card">
                <img src="images/amenties.jpg" alt="Basic Amenties" />
                <h2>Basic Amenities</h2>
                <p>Enjoy clean bedding, towels, toiletries, and laundry facilities for a comfortable stay.</p>
              </div>
            </div>

            <div className="ComuandEnter">
              <div className="card">
                <img src="images/entertainment.jpeg" alt="Communication and Entertainment" />
                <h2>Communication and Entertainment</h2>
                <p>Stay connected with your loved ones and access entertainment facilities during your stay.</p>
              </div>
            </div>

            <div className="Safemeatures">
              <div className="card">
                <img src="images/safetymeasures.jpg" alt="Safety Measures" />
                <h2>Safety Measures</h2>
                <p>We prioritize your safety with strict infection control measures and safety protocols.</p>
              </div>
            </div>
          </div>

          <div className="barchartcontainer">
            <img src="images/barchart-1.png" alt="Barchart Image" />
            <p className="stats">Our Center Stats</p>
          </div>
        </div>
      </main>
      <footer>
        <p className="footertxt">&copy; 2023 Stay Safe Quarantine Center. All rights reserved.</p>
      </footer>
    </>
  );
}

export default OurCenter;

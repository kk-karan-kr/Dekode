import React, { useEffect } from 'react';
import './FoodManufacture.css';
import bgImage from '../assets/foodmanufacture1.jpg';
import contentImage1 from '../assets/foodmanufacture2.jpg';
import contentImage2 from '../assets/foodmanufacture3.jpg';

const FoodManufacture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fm-page">
      <section className="fm-hero">
        <div className="fm-hero-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="fm-hero-overlay"></div>
        <div className="container fm-hero-content">
          <h1 className="fm-hero-title">Food Manufacturing Company</h1>
        </div>
      </section>

      <section className="fm-overview-section fm-light-theme">
        <div className="container fm-overview-split">
          <div className="fm-overview-main-card">
            <h3>Challenge</h3>
            <p className="fm-lead-text">Followed a traditional paper-based management system that constantly led to operational and management inefficiencies resulting in depleting business profitability and sustainability.</p>
          </div>
          <div className="fm-overview-side-cards">
            <div className="fm-stat-card">
              <h3>Industry</h3>
              <p className="fm-highlight-text">Food Manufacturing</p>
            </div>
            <div className="fm-stat-card">
              <h3>Solution Platform</h3>
              <p className="fm-highlight-text">Microsoft Azure</p>
            </div>
            <div className="fm-stat-card fm-stat-card-full">
              <h3>Solution</h3>
              <p>Designed and developed digital Production Management System that increased productivity by 20% in Phase 1.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fm-details-section fm-light-theme">
        <div className="container">
          <div className="fm-split">
            <div className="fm-split-text">
              <h2 className="fm-gradient-title">Obstacles <span className="title-yellow">At the Production Plant</span></h2>
              <p>Beston took over the Shepparton site in 2018. Prior to purchase, the site had been following a traditional paper-based management system for many years. During this time, the business had begun to expand, but storing and finding information became increasingly difficult and both management and staff were unable to track production and manufacturing processes. Further, this paper-based system was not tied into corporate reporting systems and a significant amount of time was spent each month to ensure information could be provided to corporate finance and management. The paper-based system also meant that it was difficult to make operational improvements.</p>
              <p>All these issues meant the plant was not performing as expected with management only able to hypothesise the reasons for poor performance (e.g. inefficient procurement, high waste of raw material, inaccurate numbers and inventory mismatches).</p>
            </div>
            <div className="fm-split-image glow-border">
              <img src={contentImage1} alt="Production Plant Obstacles" />
            </div>
          </div>
        </div>
      </section>

      <section className="fm-help-section fm-light-theme">
        <div className="container text-center">
          <h2 className="fm-gradient-title"><span className="title-yellow">How</span> DEKODE Helped</h2>
          <p className="fm-centered-text">Our process to work with client ensures that the client's needs are kept front and centre. We work with the client to understand their needs, design the solution with client feedback, develop the solution with regular client check-ins, and finally, deploy the solution.</p>
        </div>
        
        {/* Recreating the Client Driven Solutions image steps */}
        <div className="container fm-timeline">
          <div className="fm-timeline-step">
            <div className="fm-step-icon" style={{ borderColor: '#3a7ca5' }}>
              <span className="fm-icon-inner bg-blue">01</span>
            </div>
            <h4>Understand</h4>
            <p>Work with client to understand their needs and pain points</p>
          </div>
          <div className="fm-timeline-connector blue-teal"></div>
          
          <div className="fm-timeline-step">
            <div className="fm-step-icon" style={{ borderColor: '#6abf98' }}>
              <span className="fm-icon-inner bg-teal">02</span>
            </div>
            <h4>Design</h4>
            <p>Design the solution with feedback from the client</p>
          </div>
          <div className="fm-timeline-connector teal-green"></div>
          
          <div className="fm-timeline-step">
            <div className="fm-step-icon" style={{ borderColor: '#b6d763' }}>
              <span className="fm-icon-inner bg-green">03</span>
            </div>
            <h4>Develop & Iterate</h4>
            <p>Develop solution and incorporate regular feedback</p>
          </div>
          <div className="fm-timeline-connector green-dark"></div>
          
          <div className="fm-timeline-step">
            <div className="fm-step-icon" style={{ borderColor: '#5da589' }}>
              <span className="fm-icon-inner bg-dark-teal">04</span>
            </div>
            <h4>Deploy</h4>
            <p>Deploy the solution and provide support</p>
          </div>
        </div>

        <div className="container fm-step-details">
          <div className="fm-step-detail-card">
            <h3>Understand</h3>
            <p>By working with DEKODE, Beston was able to identify and resolve loss-making gaps in their operations. We worked to understand what the key drivers of operating efficiency and profitability. Key issue was the significant amount of manual/paper based tracking which was time consuming and often inaccurate.</p>
          </div>
          <div className="fm-step-detail-card">
            <h3>Design</h3>
            <p>With client input, DEKODE designed an easy to use, cloud based information capture and management system to move away from manual information entry and management. The design included simple interfaces, an information database, and management reports.</p>
          </div>
          <div className="fm-step-detail-card">
            <h3>Develop and Iterate</h3>
            <p>We first built a prototype to ensure the design was effective; and incorporating feedback, we built an effective solution which met client needs.</p>
          </div>
          <div className="fm-step-detail-card">
            <h3>Deploy</h3>
            <p>We deployed the solution within the client's budget and required timeframes.</p>
          </div>
        </div>
      </section>

      <section className="fm-outcomes-section fm-light-theme">
        <div className="container fm-split">
          <div className="fm-split-image glow-border">
            <img src={contentImage2} alt="Successful Outcomes" />
          </div>
          <div className="fm-split-text">
            <h2 className="fm-gradient-title">Outcomes <span className="title-yellow">Achieved</span></h2>
            <p>By eliminating paper-based information management and moving to an Electronic Information Capturing and Production Management System, Beston reduced the manual efforts and associated costs by <strong>20% in Phase 1</strong>.</p>
            <p>Further, the information database will provide Beston with a rich source of information to find and test areas of operational improvement in future. The electronic system provides instant feedback which enables management to measure the impact and propose improvements along the way.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodManufacture;

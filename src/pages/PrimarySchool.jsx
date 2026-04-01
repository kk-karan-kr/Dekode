import React, { useEffect } from 'react';
import './PrimarySchool.css';
import bgImage from '../assets/school1.jpg';
import contentImage1 from '../assets/school2.jpg';
import contentImage2 from '../assets/school3.jpg';

const PrimarySchool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ps-page">
      <section className="ps-hero">
        <div className="ps-hero-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="ps-hero-overlay"></div>
        <div className="container ps-hero-content">
          <h1 className="ps-hero-title">Primary School</h1>
        </div>
      </section>

      <section className="ps-overview-section ps-light-theme">
        <div className="container ps-overview-split">
          <div className="ps-overview-main-card">
            <h3>Challenge</h3>
            <p className="ps-lead-text">Followed a manual paper-based management and administration system that constantly led them to lose a lot of useful data and gradually saw in a decline in the safety of the school.</p>
          </div>
          <div className="ps-overview-side-cards">
            <div className="ps-stat-card">
              <h3>Industry</h3>
              <p className="ps-highlight-text">Educational Institution</p>
            </div>
            <div className="ps-stat-card">
              <h3>Solution Platform</h3>
              <p className="ps-highlight-text">Cloud, Amazon Web Services</p>
            </div>
            <div className="ps-stat-card ps-stat-card-full">
              <h3>Solution</h3>
              <p>Provided a fully automated management software called “AttendMe”.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-details-section ps-light-theme text-left">
        <div className="container">
          <div className="ps-split">
            <div className="ps-split-text">
              <h2 className="ps-gradient-title">Challenges & <span className="title-yellow">Obstacles</span></h2>
              <p>Stella Maris Primary School had been following a traditional paper-based management system for many years. From capturing admirative data, visitor management, recording child pickup and drop details, staff and incident management, everything was recorded manually on a paper based system. Storing, locating, archiving and reporting information to the authorities started to become a hindrance because of the traditional paper-based management system.</p>
              <p>One of the key instances that became a moment of realization for Stella Maris was when they started to attract a lot of administration cost and lost a lot of time and effort to track back scores of documents at the time of reporting. This resulted in inefficiency in the management of the school.</p>
              <p>In their quest to reduce administrative costs and simplify their operations, Stella Maris wanted to upgrade to a fully automated system where they could store and locate information and keep a track of past records or archives.</p>
              <p>They were looking for someone who could provide them a fully automated information system, save their time and administrative overheads by fully automating their management system.</p>
            </div>
            <div className="ps-split-image glow-border">
              <img src={contentImage1} alt="Primary School Challenges" />
            </div>
          </div>
        </div>
      </section>

      <section className="ps-help-section ps-light-theme">
        <div className="container">
           <div className="ps-split ps-reverse">
             <div className="ps-split-image glow-border">
               <img src={contentImage2} alt="How DEKODE Helped" />
             </div>
             <div className="ps-split-text">
               <h2 className="ps-gradient-title"><span className="title-yellow">How</span> DEKODE Helped</h2>
               <p>By adopting an automated system, Stella Maris noticed a decline in the administrative overheads and eliminated the unnecessary time and energy spent maintaining records on paper. Through their information capturing system, Stella Maris was also able to archive, locate and report compliance to the authorities. This helped release a lot of administrative workload.</p>
               <p>By working with DEKODE, Stella Maris was able to smoothen their operations, further providing a safer environment for children and helping parents release any of their worries. Stella Maris looks forward to working with DEKODE to maintain its data management systems.</p>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default PrimarySchool;

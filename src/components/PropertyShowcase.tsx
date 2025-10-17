import React from 'react';
import './PropertyShowcase.css';

export const PropertyShowcase: React.FC = () => {
  return (
    <div className="property-showcase-container">
      <div className="property-grid">
        <article className="property-card">
          <div className="card-image-wrapper">
            <img src="https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern office building" />
            <span className="property-tag">Opportunity with Pricing Power</span>
          </div>
          <div className="card-content">
            <p className="property-address">123 Main St. Anytown</p>
            <p className="property-sqft">50,000 sq ft</p>
          </div>
          <div className="status-icon status-success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </article>

        <article className="property-card">
          <div className="card-image-wrapper">
            <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Suburban strip center" />
            <span className="property-tag">Opportunity with Pricing Power</span>
          </div>
          <div className="card-content">
            <p className="property-address">123 Main St. Anytown</p>
            <p className="property-sqft">50,000 sq ft</p>
          </div>
          <div className="status-icon status-success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </article>

        <article className="property-card">
          <div className="card-image-wrapper">
            <img src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Office building with high buildout costs" />
            <span className="property-tag">High Buildout Costs for the Market</span>
          </div>
          <div className="card-content">
            <p className="property-address">123 Main St. Anytown</p>
            <p className="property-sqft">50,000 sq ft</p>
          </div>
          <div className="status-icon status-failure">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </div>
        </article>

        <article className="property-card">
          <div className="card-image-wrapper">
            <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Office building in a competitive market" />
            <span className="property-tag">Too Much Market Competition</span>
          </div>
          <div className="card-content">
            <p className="property-address">123 Main St. Anytown</p>
            <p className="property-sqft">50,000 sq ft</p>
          </div>
          <div className="status-icon status-failure">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </div>
        </article>
      </div>
    </div>
  );
};

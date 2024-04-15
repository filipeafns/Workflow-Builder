import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <header>
        <div className='wf-name'>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_324_771)">
          <path d="M6 8C6 5.79086 7.79086 4 10 4H26C28.2091 4 30 5.79086 30 8V24C30 26.2091 28.2091 28 26 28H10C7.79086 28 6 26.2091 6 24V8Z" fill="white" fill-opacity="0.2"/>
          <path d="M6.5 8C6.5 6.067 8.067 4.5 10 4.5H26C27.933 4.5 29.5 6.067 29.5 8V24C29.5 25.933 27.933 27.5 26 27.5H10C8.067 27.5 6.5 25.933 6.5 24V8Z" stroke="white" stroke-opacity="0.1"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0303 12.4697C20.3232 12.7626 20.3232 13.2374 20.0303 13.5303L17.5607 16L20.0303 18.4697C20.3232 18.7626 20.3232 19.2374 20.0303 19.5303C19.7374 19.8232 19.2626 19.8232 18.9697 19.5303L15.9697 16.5303C15.6768 16.2374 15.6768 15.7626 15.9697 15.4697L18.9697 12.4697C19.2626 12.1768 19.7374 12.1768 20.0303 12.4697Z" fill="white"/>
          </g>
          <defs>
          <filter id="filter0_d_324_771" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.180392 0 0 0 0 0.196078 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_324_771"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_324_771" result="shape"/>
          </filter>
          </defs>
        </svg>
        <p>Untitled Workflow</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 5.96967C4.76256 5.67678 5.23744 5.67678 5.53033 5.96967L8 8.43934L10.4697 5.96967C10.7626 5.67678 11.2374 5.67678 11.5303 5.96967C11.8232 6.26256 11.8232 6.73744 11.5303 7.03033L8.53033 10.0303C8.23744 10.3232 7.76256 10.3232 7.46967 10.0303L4.46967 7.03033C4.17678 6.73744 4.17678 6.26256 4.46967 5.96967Z" fill="white"/>
        </svg>
        </div>
        <div>
          <p>Last edited by Gregg Mojica – Now</p>
        </div>
        <div className='actions'>
          <button className='secondary'>Settings</button>
          <button className='secondary'>Preview</button>
          <button>Release Workflow</button>
        </div>
        </header>
      <div className='wrapper'>
        <App />
        <div className='configure'>
          <div className='configure-header'>
            <h2>Shopify Trigger</h2>
            <img src="shopify-big.svg" alt="" />
          </div>
          <div className='toggle'>
            <span className='active'>
              <span className='tab-count'>1</span>
              Select Inputs
            </span>
            <span className='default'>
              <span className='tab-count'>2</span>
              Configure
            </span>
          </div>
          <div className='trigger-name'>
            <label htmlFor="">Trigger name</label>
            <input type="text" placeholder='Enter a name' value="Trigger when a new customer is created"/>
          </div>
          <ul className='trigger-list'>
            <h3>Select a Trigger Event</h3>
            <ul>
              <div className='trigger-category'>
                <img src="star.svg" alt="" />
                <h4>Recommended</h4>  
              </div>
              <li className='event-card'>
                <h5>User created</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>New Order</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
              <li className='event-card'>
                <h5>Cart abandoned</h5>
                <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </main>
  </React.StrictMode>
);

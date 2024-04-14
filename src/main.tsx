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
          <div>
            <h3>Shopify Trigger</h3>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_265_14609)">
            <path d="M33.7439 7.576C33.7166 7.37731 33.543 7.26708 33.3989 7.25508C33.256 7.24308 30.4551 7.20052 30.4551 7.20052C30.4551 7.20052 28.1126 4.92574 27.8812 4.69433C27.6498 4.46292 27.1979 4.53278 27.0222 4.58517C27.02 4.58627 26.5823 4.72162 25.8455 4.94975C25.7222 4.55025 25.5409 4.05905 25.2822 3.56567C24.4483 1.9742 23.2269 1.13262 21.7511 1.13045C21.7489 1.13045 21.7478 1.13045 21.7456 1.13045C21.643 1.13045 21.5415 1.14027 21.4389 1.149C21.3953 1.0966 21.3516 1.04531 21.3058 0.995089C20.6628 0.30742 19.8387 -0.027684 18.8509 0.00178762C16.945 0.0563648 15.0469 1.4328 13.5078 3.87786C12.425 5.59812 11.6008 7.75941 11.3673 9.43272C9.17871 10.1106 7.64836 10.5843 7.61453 10.5952C6.50988 10.9423 6.47496 10.9761 6.33087 12.0175C6.2239 12.8045 3.3335 35.155 3.3335 35.155L27.5559 39.3443L38.0543 36.7344C38.0543 36.7344 33.7711 7.77469 33.7439 7.576ZM24.6328 5.32524C24.075 5.49771 23.4408 5.69418 22.7531 5.90704C22.7389 4.94211 22.6243 3.59951 22.1746 2.4392C23.6209 2.71318 24.3326 4.3494 24.6328 5.32524ZM21.4858 6.29999C20.2164 6.69292 18.8312 7.1219 17.4417 7.552C17.8324 6.05548 18.5736 4.56553 19.484 3.5886C19.8223 3.22512 20.2961 2.82015 20.8571 2.58874C21.3843 3.68902 21.4989 5.24665 21.4858 6.29999ZM18.889 1.27016C19.3366 1.26033 19.7132 1.35858 20.0352 1.57033C19.52 1.83776 19.0222 2.22199 18.5551 2.723C17.3445 4.02194 16.4167 6.03802 16.0467 7.98315C14.8929 8.34007 13.7642 8.69049 12.7251 9.01141C13.3812 5.94961 15.9473 1.3553 18.889 1.27016Z" fill="#95BF47"/>
            <path d="M33.3997 7.25619C33.2567 7.24419 30.4558 7.20164 30.4558 7.20164C30.4558 7.20164 28.1134 4.92684 27.882 4.69544C27.7957 4.6092 27.6789 4.56445 27.5566 4.5459L27.5578 39.3432L38.0551 36.7344C38.0551 36.7344 33.7719 7.7758 33.7446 7.57711C33.7173 7.37842 33.5427 7.26819 33.3997 7.25619Z" fill="#5E8E3E"/>
            <path d="M21.7379 12.6539L20.5187 17.2154C20.5187 17.2154 19.1586 16.5966 17.5464 16.6981C15.1821 16.8476 15.157 18.3387 15.1811 18.7131C15.3098 20.7532 20.6769 21.1985 20.9782 25.9773C21.2151 29.7366 18.9839 32.3082 15.7694 32.5113C11.9108 32.7547 9.78662 30.4788 9.78662 30.4788L10.6042 27.0012C10.6042 27.0012 12.7425 28.6145 14.454 28.5064C15.5718 28.4354 15.9713 27.5262 15.9309 26.8832C15.7628 24.2221 11.3923 24.3792 11.1161 20.0065C10.8836 16.327 13.3003 12.5983 18.6325 12.2621C20.6868 12.13 21.7379 12.6539 21.7379 12.6539Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_265_14609">
            <rect width="34.7541" height="40" fill="white" transform="translate(3.3335)"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div className='toggle'>
            <span className='active'>
              <span>1</span>
              Select Inputs
            </span>
            <span>
              <span>2</span>
              Configure
            </span>
          </div>
          <div>
            <label htmlFor="">Block name</label>
            <input type="text" placeholder='Search Apps'/>
          </div>
          <ul>
            <h2>Select a Trigger Event</h2>
            <li>
              <h4>Cart abandoned</h4>
              <p>Lorem ipsum sit dolor amet avec sans nitum lorem gard app</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </React.StrictMode>
);

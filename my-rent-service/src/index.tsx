import React from 'react'
import ReactDom from 'react-dom/client'
import App from './components/app/app'
import { Setting } from './const'

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={Setting.rentalOffersCount}/>
  </React.StrictMode>
)

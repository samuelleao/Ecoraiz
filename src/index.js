import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/illustrations.css'
import './styles/global.css'
import './styles/colors.css'
import './styles/fonts.css'
import './styles/components/buttons.css'

import Footer from './components/footer';
import ButtonWhatsapp from './components/buttonWhatsapp';

ReactDOM.render(
  <div>
    <App />
    <Footer />
    <ButtonWhatsapp />
  </div>
  ,
  document.getElementById('root')
);



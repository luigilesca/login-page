import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/common.css"


import Entry from './components/classComponents/Entry';
import { BrowserRouter } from 'react-router-dom';
import Rounting from './routing/Rounting';
import Prova from './screens/Prova';
import ScrennProvaNavbar from "./screens/ScrennProvaNavbar"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Rounting />
  </BrowserRouter>

  // <ScrennProvaNavbar />


);



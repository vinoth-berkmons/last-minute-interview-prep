import '../App.css';

import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routing/Routes';




const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
export { App };

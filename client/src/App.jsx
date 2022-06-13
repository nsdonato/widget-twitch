import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chats from './Chats';
import ConfettiWidget from './Confetti';
import ZumbidoWidget from './Zumbido';
import DetectBrowser from './DetectBrowser';
import SelectedChat from './SelectedChat';
import SetBackgrounWidget from './SetBackgrounWidget';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/widgets/selected-chat" element={<SelectedChat />} />
        <Route path="/widgets/detect-browser" element={<DetectBrowser />} />
        <Route
          path="/widgets/confetti"
          element={<h1>{<ConfettiWidget />}</h1>}
        />
        <Route
          path="/widgets/zumbido"
          element={<h1>{<ZumbidoWidget />}</h1>}
        />
        <Route
          path="/widgets/selected-background"
          element={<SetBackgrounWidget />}
        />
        <Route path="/" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

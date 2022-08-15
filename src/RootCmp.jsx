import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage.jsx';
import BlackJack from '../src/pages/BlackJack.jsx';
import About from '../src/pages/About.jsx';

export class RootCmp extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blackjack" element={<BlackJack />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

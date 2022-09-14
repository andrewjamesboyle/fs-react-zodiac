import React from 'react';
import { zodiacSigns } from '../../data';
import Zodiac from '../Zodiac/Zodiac';
import background from '../../background.png';
import './main.css';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacSigns.map((sign) => (
        <Zodiac key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}
import React from 'react';
import { zodiacSigns } from '../../data';
import Zodiac from '../Zodiac/Zodiac';

export default function Main() {
  return (
    <main>
      {zodiacSigns.map((sign) => (
        <Zodiac key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}
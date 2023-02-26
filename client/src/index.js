import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BattleResults from './BattleResults';

document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BattleResults />
  </React.StrictMode>
);

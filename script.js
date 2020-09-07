'use strict';

// window.addEventListener("DOMContentLoaded", start);

const input = document.querySelector('.input');
const cube = document.querySelector('.colorPalete');
const hex = document.querySelector('[data-value=HEX]');
const rgbValue = document.querySelector('[data-value=RGB]');


input.addEventListener('input', changeColor);


function changeColor() {
  const hexvalue = cube.style.background = input.value;
  setHex();
  hexToRGB(hexvalue)
}

function setHex() {
  hex.textContent = `HEX: ${input.value}`;
}

function hexToRGB(hex) {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);
  rgbValue.textContent = `RGB: ${red} ${green} ${blue}`;
  rgbToHsl();
}

function rgbToHsl(r,g,b){
   r /= 255;
   g /= 255;
   b /= 255;
 
   let h, s, l;
 
   const min = Math.min(r,g,b);
   const max = Math.max(r,g,b);
  
   if( max === min ) {
     h = 0;
   } else
   if (max === r) {
     h = 60 * (0 + (g - b) / (max - min) );
   } else
   if (max === g) {
     h = 60 * (2 + (b - r) / (max - min) );
   } else
   if (max === b) {
     h = 60 * (4 + (r - g) / (max - min) );
   }
  
   if (h < 0) {h = h + 360; }
  
   l = (min + max) / 2;
  
   if (max === 0 || min === 1 ) {
     s = 0;
   } else {
     s = (max - l) / ( Math.min(l,1-l));
   }
   // multiply s and l by 100 to get the value in percent, rather than [0,1]
   s *= 100;
   l *= 100;
 
   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

}

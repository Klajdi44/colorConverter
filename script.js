'use strict';

// window.addEventListener("DOMContentLoaded", start);

const input = document.querySelector('.input');
input.addEventListener('input', changeColor);


function changeColor() {
  const cube = document.querySelector('.colorPalete');
  const hexvalue = cube.style.background = input.value;
  const rgb = hexToRGB(hexvalue);
  const hsl = RGBToHSL(rgb.red, rgb.green, rgb.blue);

  visualizeHex(input.value);
  visualizeRGB(rgb.red, rgb.green, rgb.blue);
  visualizHSL(hsl.h, hsl.s, hsl.l);

}

function hexToRGB(hex) {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);
  return { red, green, blue };
}

function visualizeHex(hexValue) {
  document.querySelector('[data-value=HEX]').textContent = `HEX: ${hexValue}`;
}

function visualizeRGB(red, green, blue) {
  document.querySelector('[data-value=RGB]').textContent = `RGB: ${red} ${green} ${blue}`;
}

function visualizHSL(h, s, l) {
  document.querySelector('[data-value=HSL]').textContent = `HSL: ${h} ${s}% ${l}%`;
}

function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }
  if (h < 0) {
    h = h + 360;
  }
  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  s *= 100;
  l *= 100;
  console.log("hsl(%f,%f%,%f%)", h, s, l);

  return {
    h: Math.floor(h),
    s: Math.floor(s),
    l: Math.floor(l),
  };
}


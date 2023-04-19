const WebFont = require('webfontloader');

// Original code - if you leave this section active you will get console errors as google font's has been disabled.

// const linkEl = document.querySelector('link[href*="https://fonts.googleapis.com/css"]');
// const fontUrl = linkEl.getAttribute('href');
// const regexFontsCollection = /family=([^&]*)/gm;
// const families = regexFontsCollection.exec(fontUrl)[1].replace(/\+/gm, ' ').split('|');

// Adjusted for the fonts selected.
const families = ['Lato:400,600,700', 'Quicksand:400', 'Barlow:900,600,400'];

WebFont.load({
    custom: {
        families,
    },
    classes: false,
});

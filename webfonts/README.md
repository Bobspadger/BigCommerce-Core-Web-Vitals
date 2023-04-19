# Using your own hosted webfonts.

To not rely on Google fonts, you can use your own hosted webfonts.

I won't go into getting your webfonts yourself, but there is a [great tutorial here](https://www.youtube.com/watch?v=zK-yy6C2Nck) from Kevin Powell.

The issue you will probably run into with doing this (even though you have improved your page score by not waiting on external domains and another connection) is the Flash of unstyle content/text. Where you get that horrible default font whilst the webfont downloads.

BigCommerce have a system in place for this with Google with the `WebFont` loader (`assets/js/common/font.js`) that helps with the loading but its not perfect.

With a bit of work, you can improve the score by hosting the fonts yourself.


I'm happy to be proven wrong on the `WebFont loader` but i've left it in place with the small modification because:

1. It stops the JS errors because it cannot parse the url out of the document (and I dont have time to write any custom JS to test if its correct etc..).
2. I'm not 100% sure if it is having an impact or not, but it does not seem to be negative.

## Implementing:

- Disable google fonts from downloading etc - it has to do this each time and the cache level is quite low.
- Adjust the WebFont loader to provide it with an array of the fonts you are using and their weights.
- Add your fonts to the `/assets/fonts` directory
- Add to your SCSS the @font-face property for the fonts and weights you require. [I would suggest you don't add it to the `theme.scss` file, i've only put it in there in this demo to show workings.]
- Create a preload component, and add your font's to this using the `{{cdn}}` helper and add to your `base.html` in the `<head>` section, as close to the top as possible.


The preload component is the bit that stops the flast of unstyled text for me - as the font is downloaded before the CSS is loaded, meaning a nice smooth load!







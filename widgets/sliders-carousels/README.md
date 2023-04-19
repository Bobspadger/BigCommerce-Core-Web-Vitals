# Category Slider / Carousel

This widget is for the following:

- Adding a slick carousel to a page of your choice.
- Using UNIFORM SIZED SLIDES , calculate the required height of the carousel to negate the CLS casued by slick rendering in.
- Some CSS adjustments to stop the slides rendering in before the carousel is active. See this site for info: https://trungk18.com/experience/slick-layout-shift/


This is a quick extract of our category carousel that we use in various places around the site. ( We have one for a brand carousel too)

I've not checked this is fully 100% functional in this form, as our implementation of this has some of the CSS in the SCSS files of the theme - I have extracted this and
added it to the `<style>` element in the widget.

*** You may also need to look at how the slick carousel is activated in the theme JS - some themse change this to suit their needs ***

There is also the `data-slick-delay` attribute applied which requires the adjustment of your themes JS files - see Tony's article [HERE](https://bigcommerce.websiteadvantage.com.au/tag-rocket/articles/bigcommerce-speed-optimisation-carousel/) on this


## What you need to change:
- Look in the html widget, work out your slide sizes and adjust the calculations to suit (ie, slides 400x300 = 400/300 = 1.333 as the aspect ration) this then goes into the calculations, including any padding etc to work out the min-height required for the carousel to stop the CLS.
- Adjust the calculations for break points / number of slides etc.
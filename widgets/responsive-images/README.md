# Responsive images widget.

This widget resolves issues with the CLS and LCP of placing widgets in and around the store with the native BigCommerce widgets.

It is rather opinionated and has postentially more options than is required but it was initially created to solve our own internal requirements for staff to place image content around the site without having any negative impact to the page experience scores from google.

You will most likely want to adjust the breakpoints in the `img sizes` attribute - the values there were for the supermarket theme , calculating the correct sizes based on the main container width and any padding etc at these break points.

You should be able to use this for a single image, all the way up to a small gallery style.

There are options for flexbox layout, images per row on different screen sizes, etc etc.


## Performance options.

- There are inputs for the image size (width and height) these are the physical dimensions of the original image you have uploaded via the image manager. It is used to calculate the ration of the image when rendered.
- Lazy Loading: If the images are most likely to be below the fold on page load, you can set lazy loading to true, and let the browser deal with loading the images and saving on network requests / traffic. If its above the fold, set it to eager to help with LCP
- Fetch Priority - similar use case to Lazy loading.


## In the widget:

```handlebars
 src="{{strReplace imageUrl.src "original" "160w"}}"
 ```
This loads the image at a width of 160px (most likely much smaller than your required size) as a default.

```handlebars
srcset="{{strReplace imageUrl.src "original" "80w"}} 80w,
                              {{strReplace imageUrl.src "original" "160w"}} 160w,
                              {{strReplace imageUrl.src "original" "320w"}} 320w,
                              {{strReplace imageUrl.src "original" "480w"}} 480w,
                              {{strReplace imageUrl.src "original" "640w"}} 640w,
                              {{strReplace imageUrl.src "original" "768w"}} 768w,
                              {{strReplace imageUrl.src "original" "960w"}} 960w,
                              {{strReplace imageUrl.src "original" "1280w"}} 1280w,
                              {{strReplace imageUrl.src "original" "1920w"}} 1920w,
                              {{strReplace imageUrl.src "original" "2560w"}} 2560w
                                "
```

Dynamically creating the `sizes` attribute
```handlebars
sizes="
    (min-width: 1681px) calc((102.75rem - 4.5rem - 4.5rem) / {{../row}}),
    (min-width: 1261px) calc((77.625rem - 2.25rem - 2.25rem) / {{../row}}),
    (min-width: 801px) calc((100vw - 2.25rem - 2.25rem) / {{../row}}),
    (min-width: 601px) calc((100vw - 0.75rem - 0.75rem - 0.375rem - 0.375rem) / {{../rowTablet}}),
    calc((100vw - 0.75rem - 0.75rem - 0.375rem - 0.375rem) / {{../rowMobile}})
"
```
To dynamically create the sizes attribute, there is a bit of fun to be had, the above code works for MY USE CASE , you will most likely need to adjust this to play nicely with your theme.

They `why have you done this` is because if we do not have the correct `sizes` attribute the browser will end up choosing the incorrect image size for the space you have, e.g. You may end up with a 1250w image when you only need the 640w, using more network traffic and time than you require.

As a quick overview, each of the `(min-width)` breakpoints is calculating the value based on `(width of container - padding-left - padding-right [optional - parent padding left and right]) / number of images per row` (This is why I do not provide a margin option on the widget, only padding - margin will increase the size....)

The `number of images` is defined by how many images you have requested be shown on the row, for the different device types. Example, 1 on mobile, 3 on desktop...

Some of the calculations use the `100vw` as the layout is responsive, but then move onto `102.75rem` etc as we have a `max-width` container, so after a certain screen size, we know exactly how wide the contaer will be.

Again, to emphasise, you will need to fiddle with this for your use case.

Now we get a bit clever and do something that is not supported by the current bigcommerce widgets - create a srcset with CDN urls!

This gives us a responsive srcset at the widths required (feel free to change for your requirements) 

We are using the predicatble path for the bigcommerce CDN urls to request images , we can do this because we are able to get the current CDN url from the initial default image (imageUrl.src) then replace the `original` string with the width required.

Currently, if you use the handlebars helpers exposed to the widgets, you can get a srcSet, but its only the relative path, (so instead of `https://cdnXX.bigcommerce.com/storehash/.../my_image.jpg` you would only get `/160w/my_image.jpg`, robbing you of the full power of the CDN url. )

As a note about the building of the srcSet here, and not using the inbuilt srcSet directly, when I looked at the response headers from BC using the handlebars helpers srcSet, I was not getting cache times, polished (from cloudflare) images etc etc so this seems the best solution for the moment. Happy to be proven wrong on this.

# Widgets.

These widgets are designed to give you a head start in creating useful widgets for your own store that don't break your core web vitals scores, aiming to improve your CLS and LCP performance.

They may have more options than you require, and some opinionated settings. This is due to the fact they have been developed in house for the company I work for to solve our needs. These may be things such as specific media queries, default quantities / links etc. Feel free to fork and adjust to suit your use case.


## Getting started.

You will require:

- [BigCommerce widget builder](https://github.com/bigcommerce/widget-builder)
- API access_token with content modify scope. For information on how to generate store API credentials, [see Obtaining store API credentials.](https://developer.bigcommerce.com/api-docs/getting-started/authentication#obtaining-store-api-credentials)
- The correct node configuration (see widget-builder documentation)

Have a good read of the widget builder documentation for commands available to you.

### To do local testing:

`widget-builder start responsive-images`

### To upload as widget:

From the directory above the widget folder:

`widget-builder publish responsive-images` where `responsive-images` is the directory containing the widget files.


### Using on the store.

Once you have uploaded the widget to Bigcommerce you can start using it in the page builder.

## Widgets in this repository:

- [responsive-images](responsive-images/README.md) -> How to add images to a page without ruining your CLS and LCP.
- [sliders-carousels](sliders-carousels/README.md) -> A slick slider widget with no CLS issues (And potentially less thread blocking).
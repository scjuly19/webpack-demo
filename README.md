# Introduction to WebPack
 # What I learned?
  - Learned about what is webpack and why we need it? Webpack is a JavaScript module bundler which generates a mapping of assets using import/export of ES6.
  - It can also be used to bundle CSS and html files using some plugins.

  - # Loaders
      - Used to handle different kind of files, preprocess different kind of files, like sass-loaders,css-loaders.

  - # Cache Busting
      - This means to bundle the code and cache it so that it will re-build only if something changes

  - # Splitting dev and production code
      - Webpack allows us to define different config files for different modes-development and production.

  - # Handling images in html files
      - We can import images using webpack with import keyword and to acheive this we make use of 'html-loader' which converts our image path to require('imagepath'). To parse the required image we make use of 'file-loader'. This helps us to import the image into our file.

  - # Multiple Entry Points
      - We can have multiple entry points to our app using webpack. This is mainly helpful in server-side rendering.

  - # Minify HTML/CSS/JS
      - Webpack provides us with various plugins to minify our css and reduce the production code

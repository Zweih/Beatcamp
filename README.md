# Beatcamp 

[Beatcamp](https://www.beatcamp.live "Beatcamp Live Site") is a single-page RESTful web application for music sharing created with Ruby on Rails and React-Redux.

* **Features**
  * Sign up, log in, and log out
  * Create and edit albums
  * Upload music files and images
  * Responsive music player

## Back End Technologies
* [Ruby on Rails](https://rubyonrails.org/)
* [Amazon S3](https://aws.amazon.com/s3/) as a CDN for mutable uploaded user files (images and music)
* [Amazon CloudFront](https://aws.amazon.com/cloudfront/) as a CDN for static content (JS and CSS)
* [PostgreSQL](https://www.postgresql.org/) (database)
* Deployed on a [Heroku](https://www.heroku.com/) cloud server
* [TagLib](https://taglib.org/) for detecting metadata from user uploaded music
* Custom modified Heroku [buildpack](https://github.com/Zweih/taglib-buildpack) for TagLib
* [ImageMagick](https://imagemagick.org/script/index.php) for efficiently resizing images for different use cases, reducing download sizes
* RESTful API for use with AJAX requests

## Front End Technologies
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [BCrypt](https://github.com/codahale/bcrypt-ruby) (authorization)
* [AJAX](https://api.jquery.com/jquery.ajax/) for communication with RESTful JSON API
* [Webpack](https://webpack.js.org/) for JS minification
* [Google Analytics](https://marketingplatform.google.com/about/analytics/) for collecting and analyzing user behavior metadata

react-webpack-es6-sample
=========
A sample app in es6 making use of webpack, react, bower, gulp.
Supports webpack's hot reload for react.

To run with docker:

```bash
docker build -t react-webpack-es6-sample .
docker run -d -p 80:80 --name test react-webpack-es6-sample
open http://$(boot2docker ip) #OSX
# open http://127.0.0.1 #Linux
```

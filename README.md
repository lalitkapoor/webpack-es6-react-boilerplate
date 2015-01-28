webpack-es6-react-boilerplate
=========
A boilerplate app in es6 making use of webpack, react, bower, gulp.
Supports webpack's hot reload for react.

To run with docker:

```bash
docker build -t webpack-es6-react-boilerplate .
docker run -d -p 80:80 --name test webpack-es6-react-boilerplate
open http://$(boot2docker ip) #OSX
# open http://127.0.0.1 #Linux
```

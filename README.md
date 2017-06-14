# function-prep

[![build status](https://api.travis-ci.org/ecman/function-prep.png)](https://travis-ci.org/ecman/function-prep) [![codecov](https://codecov.io/gh/ecman/function-prep/branch/master/graph/badge.svg)](https://codecov.io/gh/ecman/function-prep) [![Code Climate](https://codeclimate.com/github/ecman/function-prep/badges/gpa.svg)](https://codeclimate.com/github/ecman/function-prep)

# DEPRECATED 

Use bind() instead

```js
Promise.resolve(thenSleep(1))
  .then(thenSleep.bind(null, 2))
```

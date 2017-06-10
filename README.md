# function-prep

Prepare a preset function call, intuitively

# Usage

```js
require('function-prep');

// pend() wraps the return in a Promise;
// a shortcut for:  
//     Promise.resolve(thenSleep(1))
thenSleep.pend(1)
    // Prep wraps the return in an anonymous function;
    // a shortcut for:
    //     ES5: .then(function () { return thenSleep(2) })
    //     ES6: .then(() => thenSleep(2))
    .then(thenSleep.prep(2))

// Sample function
function thenSleep(seconds) {
    console.log('Then in ' + seconds + ' seconds');
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log('... ' + seconds + 
                ' seconds elapsed, continuing');
            fulfill(seconds);
        }, seconds * 1000);
    });
}
```

Output:

```text
Then in 1 seconds
... 1 seconds elapsed, continuing
then in 2 seconds
... 2 seconds elapsed, continuing
```

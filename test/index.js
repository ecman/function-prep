require('../');
var isError = require('util').isError;
var assert = require('assert');

var in1 = thenIn.pend(1);
var in2 = thenIn.prep(2);
var message = "Hello World!";
var expected = returnArg(message);
var actual = returnArg.prep(message)();

process.on('unhuandledRejection', function (err) {
    throw err;
});

in1
.then(function (waited) { 
    assert.strictEqual(waited, 1, 
        'Pended resolved value should be 1 not ' + waited);
})

.then(in2)
.then(function (waited) { 
    assert.strictEqual(waited, 2, 
        'Preped call return value should be 2 not ' + waited);
})

.then(function () {
    assert.strictEqual(
        actual, expected,
        'Preped call returned "' + actual +
        '" but should return "' + expected + '"');
    console.log('Preped call is OK');

    actual = returnArg.pend(message);
    assert.strictEqual(
        actual instanceof Promise, true,
        'Pended value should be a Promise');
    console.log('Pended value is OK');

    actual.then(function (result) {
        assert.strictEqual(
            result, expected, 
            'Pended call returned "' + result + 
            '" but should return "' + expected + '"');
        console.log('Pended call is OK');
    });
});

function thenIn(seconds) {
    console.log('then in ' + seconds + ' seconds...');
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            fulfill(seconds);
        }, seconds * 1000);
    });
};

function returnArg(arg) {
    return arg;
};
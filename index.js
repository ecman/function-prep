Function.prototype.prep = function () {
    var args = arguments;
    var self = this;
    return function () {
        return self.apply(self, args);
    }.bind(self);
};

Function.prototype.pend = function () {
    return Promise.resolve(this.apply(null, arguments));
};

module.exports = true;

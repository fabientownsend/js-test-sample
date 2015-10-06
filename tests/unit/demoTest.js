var assert = require('assert');
var myClass = require('../../myclass');

describe('testMethodName', function() {
    it('should do thit', function() {
        var responce = myClass.myMethod();
        assert.equal(true, responce);
    });

    it('should do that', function() {
        var responce = myClass.myMethod();
        assert.equal(true, responce);
    });
});

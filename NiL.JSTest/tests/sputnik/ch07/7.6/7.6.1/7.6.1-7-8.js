/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-7-8.js
 * @description Allow reserved words as property names by index assignment, accessed via indexing: this, with, default
 */


function testcase() {
        var tokenCodes = {};
        tokenCodes['this'] = 0;
        tokenCodes['with'] = 1;
        tokenCodes['default'] = 2;   
        var arr = [
            'this',
            'with',
            'default'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
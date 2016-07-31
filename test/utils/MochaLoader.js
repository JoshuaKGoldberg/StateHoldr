/* This file was auto-generated by gulp-shenanigans */
/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/**
 * Combines mocha tests into their describe() groups.
 */
var MochaLoader = (function () {
    /**
     * Initializes a new instance of the MochaLoader class.
     *
     * @param mocha   The underlying mocha instance.
     */
    function MochaLoader(mocha) {
        /**
         * Root grouping of test hierarchies.
         */
        this.testHierarchy = {
            children: {},
            tests: {}
        };
        this.mocha = mocha;
        this.mocha.setup("bdd");
    }
    /**
     * Sets the current test path.
     *
     * @param rawPath   A new current test path.
     */
    MochaLoader.prototype.setTestPath = function (rawPath) {
        this.currentTestPath = rawPath.split("/");
    };
    /**
     * Adds a new test under the current test path.
     *
     * @param testName   The name of the test.
     * @param test   A new test.
     */
    MochaLoader.prototype.addTest = function (testName, test) {
        if (!this.currentTestPath) {
            throw new Error("No test path defined before adding test '" + testName + "'.");
        }
        var testHierarchy = this.testHierarchy;
        for (var _i = 0, _a = this.currentTestPath; _i < _a.length; _i++) {
            var part = _a[_i];
            if (!testHierarchy.children[part]) {
                testHierarchy = testHierarchy.children[part] = {
                    children: {},
                    tests: {}
                };
            }
            else {
                testHierarchy = testHierarchy.children[part];
            }
        }
        testHierarchy.tests[testName] = test;
    };
    /**
     * Finalizes the tests' describe() hierarchy.
     */
    MochaLoader.prototype.describeTests = function () {
        this.describeTestHierarchy(this.testHierarchy);
    };
    /**
     * Runs tests using mocha.
     */
    MochaLoader.prototype.run = function () {
        this.mocha.run();
    };
    /**
     * Recursively describes a test hierarchy and its children hierarchies.
     *
     * @param testHierarchy   A test hierarchy to describe.
     */
    MochaLoader.prototype.describeTestHierarchy = function (testHierarchy) {
        var _this = this;
        for (var testName in testHierarchy.tests) {
            if (testName in testHierarchy.tests) {
                it(testName, testHierarchy.tests[testName]);
            }
        }
        var _loop_1 = function(childName) {
            if (childName in testHierarchy.children) {
                describe(childName, function () { return _this.describeTestHierarchy(testHierarchy.children[childName]); });
            }
        };
        for (var childName in testHierarchy.children) {
            _loop_1(childName);
        }
    };
    return MochaLoader;
}());

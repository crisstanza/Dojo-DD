function TestObject(current, expected) {
	this.current = current;
	this.expected = expected;
}

TestObject.testData = function() {
	let testData = [];

	testData.push([{ a: 1, b: 2}, {b: 2, a: 1 }]);

	return testData;
};

TestObject.beforeClass = function() {
};

TestObject.afterClass = function() {
};

TestObject.prototype.before = function() {
};

TestObject.prototype.after = function() {
};

TestObject.prototype.testEquals = function() {
	JSUS.assertObjectEquals(this.expected, this.current);
};

function Testable(current, expected) {
	this.current = current;
	this.expected = expected;
}

Testable.testData = function() {
	let testData = [];

	testData.push(['abc', 'abc']);

	return testData;
};

Testable.beforeClass = function() {
	for (let i = 0 ; i < 1000 ; i++)
		console.log('just wasting time...');
};

Testable.afterClass = function() {
};

Testable.prototype.before = function() {
};

Testable.prototype.after = function() {
};

Testable.prototype.testEquals = function() {
	JSUS.assertEquals(this.expected, this.current);
};

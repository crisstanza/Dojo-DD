function DateDiffTestFullObject(input1, input2, expected) {
	this.input1 = input1;
	this.input2 = input2;
	this.expected = expected;
}

DateDiffTestFullObject.testData = function() {
	let testData = [];

	testData.push(
		[
			'29/04/2021 16:00', '28/02/2018 11:55',					// inputs
			{ years: 3, months: 2, days: 1, hours: 4, minutes: 5 }	// output
		]
	);

	return testData;
};

DateDiffTestFullObject.beforeClass = function() {
};

DateDiffTestFullObject.afterClass = function() {
};

DateDiffTestFullObject.prototype.before = function() {
};

DateDiffTestFullObject.prototype.after = function() {
};

DateDiffTestFullObject.prototype.testEquals = function() {
	let diff = DateDiff.diff(this.input1, this.input2);
	JSUS.assertObjectEquals(this.expected, diff);
};

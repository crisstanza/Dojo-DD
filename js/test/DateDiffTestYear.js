function DateDiffTestYear(input1, input2, expected) {
	this.input1 = input1;
	this.input2 = input2;
	this.expected = expected;
}

DateDiffTestYear.testData = function () {
	let testData = [];

	testData.push(['29/04/2021 16:00', '29/09/2021 16:00', 0]);
	

	return testData;
};

DateDiffTestYear.beforeClass = function () {
};

DateDiffTestYear.afterClass = function () {
};

DateDiffTestYear.prototype.before = function () {
};

DateDiffTestYear.prototype.after = function () {
};

DateDiffTestYear.prototype.testEquals = function () {
	let current = DateDiff.diffInYears(this.input1, this.input2);
	JSUS.assertEquals(this.expected, current);
};

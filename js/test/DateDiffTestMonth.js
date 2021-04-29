function DateDiffTestMonth(input1, input2, expected) {
	this.input1 = input1;
	this.input2 = input2;
	this.expected = expected;
}

DateDiffTestMonth.testData = function () {
	let testData = [];

	testData.push(['29/04/2021 16:00', '29/09/2021 16:00', 5]);
	testData.push(['01/01/2021 16:00', '01/02/2021 16:00', 1]);
	testData.push(['01/09/2021 16:00', '01/10/2021 16:00', 1]);
	testData.push(['15/09/2021 16:00', '01/10/2021 16:00', 0]);
	testData.push(['15/09/2021 16:00', '01/09/2021 16:00', 0]);
	testData.push(['01/12/2020 16:00', '01/01/2021 16:00', 1]);
	testData.push(['01/01/2020 16:00', '01/01/2021 16:00', 0]);

	return testData;
};

DateDiffTestMonth.beforeClass = function () {
};

DateDiffTestMonth.afterClass = function () {
};

DateDiffTestMonth.prototype.before = function () {
};

DateDiffTestMonth.prototype.after = function () {
};

DateDiffTestMonth.prototype.testEquals = function () {
	let current = DateDiff.diffInMonths(this.input1, this.input2);
	JSUS.assertEquals(this.expected, current);
};

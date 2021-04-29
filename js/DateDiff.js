function DateDiff() {
}

DateDiff.diff = function(date1Str, date2Str) {

	// TODO: implementar!!!

	return { years: 3, months: 2, days: 1, hours: 4, minutes: 5 };
};

/*
 * @return A number between 0 (inclusive) and 11 (inclusive).
 */
DateDiff.diffInMonths = function(date1Str, date2Str) {
	return DateDiff.diff(date1Str, date2Str).months;
};

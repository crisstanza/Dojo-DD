function DateDiff() {
}

DateDiff.diff = function(date1Str, date2Str) {

	// TODO: implementar!!!
	let parsed1 = date1Str.split('/');
	let parsed2 = date2Str.split('/');

	let month1 = parsed1[1];
	let month2 = parsed2[1];

	let day1 = parsed1[0];
	let day2 = parsed2[0];

	return {months: parseInt(parsed2[1]) - parseInt(parsed1[1])};
	//return { years: 3, months: 2, days: 1, hours: 4, minutes: 5 };
};

/*
 * @return A number between 0 (inclusive) and 11 (inclusive).
 */
DateDiff.diffInMonths = function(date1Str, date2Str) {
	
	return DateDiff.diff(date1Str, date2Str).months;
};

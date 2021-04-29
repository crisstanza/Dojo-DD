function DateDiff() {
}

DateDiff.diff = function (date1Str, date2Str) {

	let dateParts1 = date1Str.split(' ');
	let dateParts2 = date2Str.split(' ');
	let parsed1 = dateParts1[0].split('/');
	let parsed2 = dateParts2[0].split('/');
	let date1 = {
		day: parseInt(parsed1[0]),
		month: parseInt(parsed1[1]),
		year: parseInt(parsed1[2])
	};
	let date2 = {
		day: parseInt(parsed2[0]),
		month: parseInt(parsed2[1]),
		year: parseInt(parsed2[2])
	};

	let result = {
		months: date2.month - date1.month,
		years: date2.year - date1.year
	};

	if (result.years > 0 && date1.month > date2.month) {
		result.years--;
		result.months = 12 - date1.month + date2.month;
	}

	if (result.months > 0 && date1.day > date2.day) {
		result.months--;
	}



	
	return result;
	//return { years: 3, months: 2, days: 1, hours: 4, minutes: 5 };
};

/*
 * @return A number between 0 (inclusive) and 11 (inclusive).
 */
DateDiff.diffInMonths = function (date1Str, date2Str) {

	return DateDiff.diff(date1Str, date2Str).months;
};

/*
 * @return A number not negative.
 */
DateDiff.diffInYears = function (date1Str, date2Str) {

	return DateDiff.diff(date1Str, date2Str).years;
};

(function() {

	function init() {
		//let jsus = new JSUS(Testable, TestObject, DateDiffTestMonth, DateDiffTestFullObject);
		let jsus = new JSUS(DateDiffTestMonth,DateDiffTestYear);
		jsus.start('display');
		jsus.end();
	}

	window.addEventListener('load', init, false);

})();

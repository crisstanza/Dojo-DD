(function() {

	function init() {
		let jsus = new JSUS(Testable, TestObject, DateDiffTestMonth, DateDiffTestFullObject);
		jsus.start('display');
		jsus.end();
	}

	window.addEventListener('load', init, false);

})();

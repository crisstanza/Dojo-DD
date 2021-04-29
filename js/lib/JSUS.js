function JSUS() {
	this.testClasses = Array.from(arguments);
	this.id = undefined;
	this.buffer = [];
}

(function() {

	function formatTime(ms) {
		let s = ms < 1000 ? 0 : ms / 1000;
		ms = ms % 1000;
		return s+'s ' + ms+'ms';
	};

	function isTestableMethod(methodName) {
		return methodName.match(/test.*/);
	};

	function checkIt(testObject, testMethod) {
		return testObject[testMethod];
	}
/*
	function checkPropertyAndTestIt(_this, testObject, testMethod) {
		if (checkIt(testObject, testMethod)) {
			if (testObject.hasOwnProperty(testMethod)) {
				testIt(_this, '', testObject, testMethod);
			}
		}
	}
*/
	function checkAndTestIt(_this, testObject, testMethod) {
		if (checkIt(testObject, testMethod)) {
			testIt(_this, '', testObject, testMethod);
		}
	}

	function testIt(_this, n, testObject, testMethod) {
		let inTestNow = '['+testObject.constructor.name+'].'+testMethod+'()';
		let startTime = new Date().getTime();
		let endTime;
		try {
			testObject[testMethod]();
			endTime = new Date().getTime();
			{
				_this.buffer.push('  '+(n ? '  '+n+'. ' : '')+inTestNow+' <span class="success">[SUCCESS]</span> ['+formatTime(endTime - startTime)+']');
			}
		} catch (error) {
			endTime = new Date().getTime();
			{
				_this.buffer.push('  '+(n ? '  '+n+'. ' : '')+inTestNow+' <span class="error">[FAIL]</span> ['+formatTime(endTime - startTime)+'] '+error.message);
			}
		}
	}

	JSUS.prototype.start = function(id) {
		this.id = id;
		{
			with (this.buffer) {
				push('JSUS.prototype.start')
				push('');
				push('');
			}
		}
		let n = 1;
		for (let j = 0 ; j < this.testClasses.length ; j++) {
			let testClass = this.testClasses[j];
			checkAndTestIt(this, testClass, 'beforeClass');
			{
				this.buffer.push('');
			}
			let allTestData = testClass.testData();
			for (let i = 0 ; i < allTestData.length ; i++) {
				let testData = allTestData[i];
				let testObject = new testClass(...testData);
				for (let testMethod in testObject) {
					if (isTestableMethod(testMethod)) {
						checkAndTestIt(this, testObject, 'before');
						testIt(this, n, testObject, testMethod);
						checkAndTestIt(this, testObject, 'after');
						{
							this.buffer.push('');
						}
						n++;
					}
				}
			}
			checkAndTestIt(this, testClass, 'afterClass');
			{
				this.buffer.push('');
			}
			this.buffer.push('');
		}
	};

	JSUS.prototype.end = function() {
		{
			this.buffer.push('JSUS.prototype.end');
		}
		if (this.id) {
			let display = document.getElementById(this.id);
			display.innerHTML = this.buffer.join('<br />');
		} else {
			console.log(this.buffer.join('\n'));
		}
	}

})();

(function() {

	function assert (obj, msg) {
		if (obj === false) {
			throw new Error(msg);
		}
	}

	JSUS.assertTrue = function(obj) {
		assert(obj === true, '['+obj+'] should be [true]');
	};

	JSUS.assertFalse = function(obj) {
		assert(obj === false, '['+obj+'] should be [false]');
	};

	JSUS.assertNull = function(obj) {
		assert(obj === null, '['+obj+'] should be [null]');
	};

	JSUS.assertNotNull = function(obj) {
		assert(obj !== null, '['+obj+'] should not be [null]');
	};

	JSUS.assertUndefined = function(obj) {
		assert(obj === undefined, '['+obj+'] should be [undefined]');
	};

	JSUS.assertObjectEquals = function(obj1, obj2) {
		assert(typeof obj1 === 'object', '['+obj1+'] should be an object');
		assert(typeof obj2 === 'object', '['+obj2+'] should be an object');
		let keys1 = Object.keys(obj1);
		let keys2 = Object.keys(obj2);
		assert(keys1.length === keys2.length, '['+obj2+'] should have the same number of properties than ['+obj1+']');
		for (let i = 0 ; i < keys1.length ; i++) {
			let key = keys1[i]
			let value1 = obj1[key];
			let value2 = obj2[key];
			assert(value1 === value2, '['+value2+'] should be equals to ['+value1+']');
		}
	};

	JSUS.assertEquals = function(obj1, obj2) {
		assert(obj1 === obj2, '['+obj2+'] should be equals to ['+obj1+']');
	};

	JSUS.assertNotEquals = function(obj1, obj2) {
		assert(obj1 !== obj2, '['+obj2+'] should not be equals to ['+obj1+']');
	};

	JSUS.assertBetween = function(limInf, obj, limSup) {
		assert(obj >= limInf && obj <= limSup, '['+obj+'] should be between ['+limInf+'] and ['+limSup+'] inclusive');
	};

	JSUS.assertEndsWith = function(obj2, obj1) {
		assert(new RegExp(obj1+'$').test(obj2), '['+obj2+'] should ends with ['+obj1+']');
	};

	JSUS.assertStartsWith = function(obj2, obj1) {
		assert(new RegExp('^'+obj1).test(obj2), '['+obj2+'] should starts with ['+obj1+']');
	};

})();

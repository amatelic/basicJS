// Module pattern
//Good help us to have private methods  and variables

var moduleName = (function() {
	'use strict';
	// private method can been see just in  this scope
	function _private () {
		console.log("private function");
	}
	var moduleName = {
		// can been seein in global scope
		init: {
			
		},
		public: function () {
			console.log("public function");
		}
	};

	return moduleName;

}());
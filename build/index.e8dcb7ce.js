webpackJsonp([1],{

/***/ 175:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Selection = exports.Selection = function Selection(str) {
		var YESYOUARE = 'aaaa';
		return document.getElementById(str);
	};

/***/ },

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ddd = ddd;
	exports.default = 'yes expose global';

	function abc() {
		console.log('yes, abc as outputDefault');
	}
	function ddd(name) {
		console.log(name);
		return name;
	}
	exports.outputDefault = abc;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(177);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Selection} from '../../../common/scripts/Test';
	//import {Selection} from 'Test';


	var IndexOne = function (_React$Component) {
	  _inherits(IndexOne, _React$Component);

	  function IndexOne(props) {
	    _classCallCheck(this, IndexOne);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IndexOne).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(IndexOne, [{
	    key: 'render',
	    value: function render() {
	      !/* require.ensure */(function () {/* WEBPACK VAR INJECTION */(function(TestGlobal) {
	        console.log(TestGlobal.Selection, 'TestGlobal in index_1.js----->>>');
	      
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(175)))}(__webpack_require__));
	      return _react2.default.createElement(
	        'div',
	        { className: 'index_1' },
	        this.props.name
	      );
	    }
	  }]);

	  return IndexOne;
	}(_react2.default.Component);

	exports.default = IndexOne;

/***/ },

/***/ 177:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, TestExpose, TestGlobal) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index_ = __webpack_require__(176);

	var _index_2 = _interopRequireDefault(_index_);

	var _lodash = __webpack_require__(181);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {Selection} from 'Test';
	//import Expose1, {outputDefault, ddd} from 'testexpose';
	console.log('index.jsx:', 'jquery:', $, 'lodash: forEach', _lodash2.default.forEach);
	//import $ from 'jquery';
	//require('../lib/jquery-1.8.3.js');

	TestExpose.outputDefault();
	console.log(TestGlobal, 'TestGlobal------->>>');
	console.log('test expose in index.js :', TestExpose.default, 'ddd:', TestExpose.ddd('zs'));
	_reactDom2.default.render(_react2.default.createElement(_index_2.default, { name: 'index1' }), TestGlobal.Selection('index_wrap'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(172), __webpack_require__(174), __webpack_require__(175)))

/***/ },

/***/ 181:
/***/ function(module, exports) {

	module.exports = _;

/***/ }

});
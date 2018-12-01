'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('../proofOFExistenceSC/web3');

var _web2 = _interopRequireDefault(_web);

var _contract = require('../proofOFExistenceSC/contract');

var _contract2 = _interopRequireDefault(_contract);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\consenSys\\proofofexistence\\pages\\userid.js?entry';


var chkuserID = function (_Component) {
  (0, _inherits3.default)(chkuserID, _Component);

  function chkuserID() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, chkuserID);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = chkuserID.__proto__ || (0, _getPrototypeOf2.default)(chkuserID)).call.apply(_ref, [this].concat(args))), _this), _this.getDOC = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              accounts = _web2.default.eth.getAccounts();
              //const chkDOC = await contract.methods.checkDocument().call();

              console.log('in getdoc');

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(chkuserID, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var web3version = _web2.default.version;
      var accounts = _web2.default.eth.getAccounts();
      console.log(accounts[1]);
      console.log(web3version);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'primary'), _react2.default.createElement(_semanticUiReact.Button, { secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'secondary'));
    }
  }]);

  return chkuserID;
}(_react.Component);

exports.default = chkuserID;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx1c2VyaWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwiY29udHJhY3QiLCJCdXR0b24iLCJjaGt1c2VySUQiLCJnZXRET0MiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIndlYjN2ZXJzaW9uIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVM7Ozs7Ozs7SSxBQUVIOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFVSixrRkFBUyxtQkFBQTtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNEO0FBREMseUJBQ1UsY0FBQSxBQUFLLElBRGYsQUFDVSxBQUFTLEFBQzFCO0FBQ0E7O3NCQUFBLEFBQVEsSUFIRCxBQUdQLEFBQVk7O2lCQUhMO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7O3dDQVJVLEFBQ2pCO1VBQU0sY0FBYyxjQUFwQixBQUF5QixBQUN6QjtVQUFNLFdBQVcsY0FBQSxBQUFLLElBQXRCLEFBQWlCLEFBQVMsQUFDMUI7Y0FBQSxBQUFRLElBQUksU0FBWixBQUFZLEFBQVMsQUFDckI7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7OzZCQVVLLEFBRU47OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsMENBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLDRCQUFBLEFBQUMseUNBQU8sV0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBSkosQUFDRSxBQUdFLEFBSUw7Ozs7O0FBM0J1QixBLEFBOEJ4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ1c2VyaWQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovY29uc2VuU3lzL3Byb29mb2ZleGlzdGVuY2UifQ==
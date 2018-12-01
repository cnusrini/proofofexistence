'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ProofOfExistence = require('./build/contracts/ProofOfExistence.json');

var _ProofOfExistence2 = _interopRequireDefault(_ProofOfExistence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
var abi = '[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"proofs","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"document","type":"string"}],"name":"checkDocument","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"document","type":"string"}],"name":"notarize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proof","type":"bytes32"}],"name":"storeProof","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"proof","type":"bytes32"}],"name":"hasProof","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"document","type":"string"}],"name":"proofFor","outputs":[{"name":"proof","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"}]';

var instance = new _web2.default.eth.Contract(JSON.parse(abi), address);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb29mT0ZFeGlzdGVuY2VTQ1xcY29udHJhY3QuanMiXSwibmFtZXMiOlsid2ViMyIsInBvZUNvbnRyYWN0IiwiYWRkcmVzcyIsImFiaSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUEsSUFBTSxVQUFVLEFBQWhCO0FBQ0EsSUFBTSxNQUFNLEFBQVo7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxBQUFYLEFBQXRCLE1BQXVDLEFBQXZDLEFBQWpCLEFBR0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiY29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiQzovY29uc2VuU3lzL3Byb29mb2ZleGlzdGVuY2UifQ==
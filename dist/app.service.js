"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppService = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _dec, _class;
var _require = require('@nestjs/common'),
  Injectable = _require.Injectable;
var AppService = (_dec = Injectable(), _dec(_class = /*#__PURE__*/function () {
  function AppService() {
    (0, _classCallCheck2["default"])(this, AppService);
  }
  (0, _createClass2["default"])(AppService, [{
    key: "getHello",
    value: function getHello() {
      return 'Home Page Resource';
    }
  }]);
  return AppService;
}()) || _class);
exports.AppService = AppService;
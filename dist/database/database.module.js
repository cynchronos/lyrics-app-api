"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseModule = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _dec, _class;
var _require = require('@nestjs/common'),
  Module = _require.Module;
var _require2 = require('@nestjs/mongoose'),
  MongooseModule = _require2.MongooseModule;
var _require3 = require('@nestjs/config'),
  ConfigModule = _require3.ConfigModule;
ConfigModule.forRoot();
var DatabaseModule = (_dec = Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI)]
}), _dec(_class = /*#__PURE__*/(0, _createClass2["default"])(function DatabaseModule() {
  (0, _classCallCheck2["default"])(this, DatabaseModule);
})) || _class);
exports.DatabaseModule = DatabaseModule;
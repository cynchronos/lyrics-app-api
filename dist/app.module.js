"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _dec, _class;
var _require = require('@nestjs/common'),
  Module = _require.Module;
var _require2 = require('./app.controller'),
  AppController = _require2.AppController;
var _require3 = require('./app.service'),
  AppService = _require3.AppService;
var _require4 = require('@nestjs/config'),
  ConfigModule = _require4.ConfigModule;
var _require5 = require('./database/database.module'),
  DatabaseModule = _require5.DatabaseModule;
var _require6 = require('./lyrics/lyrics.module'),
  LyricsModule = _require6.LyricsModule;
ConfigModule.forRoot();
var AppModule = (_dec = Module({
  imports: [DatabaseModule, LyricsModule],
  controllers: [AppController],
  providers: [AppService]
}), _dec(_class = /*#__PURE__*/(0, _createClass2["default"])(function AppModule() {
  (0, _classCallCheck2["default"])(this, AppModule);
})) || _class);
exports.AppModule = AppModule;
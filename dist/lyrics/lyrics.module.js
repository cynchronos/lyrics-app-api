"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LyricsModule = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _dec, _class;
var _require = require('@nestjs/common'),
  Module = _require.Module;
var _require2 = require('@nestjs/mongoose'),
  MongooseModule = _require2.MongooseModule;
var _require3 = require('../models/LyricsSchema'),
  Lyrics = _require3.Lyrics,
  LyricsSchema = _require3.LyricsSchema;
var _require4 = require('./lyrics.controller'),
  LyricsController = _require4.LyricsController;
var _require5 = require('./lyrics.service'),
  LyricsService = _require5.LyricsService;
var LyricsModule = (_dec = Module({
  imports: [MongooseModule.forFeature([{
    name: Lyrics.name,
    schema: LyricsSchema
  }])],
  controllers: [LyricsController],
  providers: [LyricsService]
}), _dec(_class = /*#__PURE__*/(0, _createClass2["default"])(function LyricsModule() {
  (0, _classCallCheck2["default"])(this, LyricsModule);
})) || _class);
exports.LyricsModule = LyricsModule;
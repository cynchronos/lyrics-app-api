"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LyricsSchema = exports.LyricsDocument = exports.Lyrics = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
var _require = require('@nestjs/mongoose'),
  Prop = _require.Prop,
  Schema = _require.Schema,
  SchemaFactory = _require.SchemaFactory;
var _require2 = require('mongoose'),
  Document = _require2.Document;
var LyricsDocument = Lyrics & Document;
exports.LyricsDocument = LyricsDocument;
var Lyrics = (_dec = Schema(), _dec2 = Prop({
  required: true,
  type: String
}), _dec3 = Prop({
  required: true,
  type: String
}), _dec4 = Prop({
  required: true,
  type: String
}), _dec5 = Prop({
  required: true,
  type: String
}), _dec(_class = (_class2 = /*#__PURE__*/(0, _createClass2["default"])(function Lyrics() {
  (0, _classCallCheck2["default"])(this, Lyrics);
  (0, _initializerDefineProperty2["default"])(this, "title", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "artist", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "genre", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "content", _descriptor4, this);
}), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "title", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "artist", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "genre", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "content", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Lyrics = Lyrics;
var LyricsSchema = SchemaFactory.createForClass(Lyrics);
exports.LyricsSchema = LyricsSchema;
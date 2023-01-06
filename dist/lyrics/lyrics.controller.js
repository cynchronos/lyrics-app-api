"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LyricsController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2;
var _require = require('@nestjs/common'),
  Controller = _require.Controller,
  Get = _require.Get,
  Post = _require.Post,
  Put = _require.Put,
  Dependencies = _require.Dependencies,
  Bind = _require.Bind,
  Param = _require.Param,
  Query = _require.Query,
  Body = _require.Body,
  Delete = _require.Delete;
var _require2 = require('./lyrics.service'),
  LyricsService = _require2.LyricsService;
var LyricsController = (_dec = Controller('lyrics'), _dec2 = Dependencies(LyricsService), _dec3 = Get(), _dec4 = Bind(Query()), _dec5 = Get(':title/content'), _dec6 = Bind(Param()), _dec7 = Post('admin/post'), _dec8 = Bind(Body()), _dec9 = Put('admin/:title/update'), _dec10 = Bind(Param('title'), Body()), _dec11 = Delete('admin/:title/delete'), _dec12 = Bind(Param('title')), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function LyricsController(lyricsService) {
    (0, _classCallCheck2["default"])(this, LyricsController);
    this.lyrics = lyricsService;
  }
  (0, _createClass2["default"])(LyricsController, [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.lyrics.findTitle(query.q));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function findAll(_x) {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.lyrics.findLyrics(params.title));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findOne(_x2) {
        return _findOne.apply(this, arguments);
      }
      return findOne;
    }()
  }, {
    key: "store",
    value: function () {
      var _store = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(content) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.lyrics.store(content));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function store(_x3) {
        return _store.apply(this, arguments);
      }
      return store;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(title, content) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.lyrics.update(title, content));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x4, _x5) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "destroy",
    value: function () {
      var _destroy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(title) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.lyrics.destroy(title));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function destroy(_x6) {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
  }]);
  return LyricsController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "findAll", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "findAll"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "findOne", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "findOne"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "store", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "store"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "update", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "update"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "destroy", [_dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "destroy"), _class2.prototype)), _class2)) || _class) || _class);
exports.LyricsController = LyricsController;
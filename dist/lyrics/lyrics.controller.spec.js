"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require('@nestjs/testing'),
  Test = _require.Test;
var _require2 = require('./lyrics.controller'),
  LyricsController = _require2.LyricsController;
describe('Lyrics Controller', function () {
  var controller;
  beforeEach( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var module;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Test.createTestingModule({
            controllers: [LyricsController]
          }).compile();
        case 2:
          module = _context.sent;
          controller = module.get(LyricsController);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('should be defined', function () {
    expect(controller).toBeDefined();
  });
});
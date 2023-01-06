"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require('@nestjs/testing'),
  Test = _require.Test;
var _require2 = require('./app.controller'),
  AppController = _require2.AppController;
var _require3 = require('./app.service'),
  AppService = _require3.AppService;
describe('AppController', function () {
  var appController;
  beforeEach( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var app;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService]
          }).compile();
        case 2:
          app = _context.sent;
          appController = app.get(AppController);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  describe('root', function () {
    it('should return "Hello World!"', function () {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
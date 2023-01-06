"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LyricsService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _dec, _dec2, _class;
var _require = require('@nestjs/common'),
  Injectable = _require.Injectable,
  Dependencies = _require.Dependencies,
  HttpStatus = _require.HttpStatus,
  Query = _require.Query;
var _require2 = require('@nestjs/mongoose'),
  getModelToken = _require2.getModelToken;
var _require3 = require('../models/LyricsSchema'),
  Lyrics = _require3.Lyrics;
var LyricsService = (_dec = Injectable(), _dec2 = Dependencies(getModelToken(Lyrics.name)), _dec(_class = _dec2(_class = /*#__PURE__*/function () {
  function LyricsService(lyricsModel) {
    (0, _classCallCheck2["default"])(this, LyricsService);
    this.lyrics = lyricsModel;
  }
  (0, _createClass2["default"])(LyricsService, [{
    key: "findTitle",
    value: function () {
      var _findTitle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.lyrics.find({
                $or: [{
                  title: {
                    $regex: query,
                    $options: "i"
                  }
                }, {
                  artist: {
                    $regex: query,
                    $options: "i"
                  }
                }]
              }).exec();
            case 2:
              data = _context.sent;
              if (!(data.length > 0)) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", {
                statusCode: HttpStatus.OK.valueOf(),
                data: data.map(function (e) {
                  return e.title;
                })
              });
            case 7:
              return _context.abrupt("return", {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                data: "Data tidak ditemukan"
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function findTitle(_x) {
        return _findTitle.apply(this, arguments);
      }
      return findTitle;
    }()
  }, {
    key: "findLyrics",
    value: function () {
      var _findLyrics = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(title) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.lyrics.findOne({
                title: title
              }).exec();
            case 2:
              data = _context2.sent;
              if (!data) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", {
                statusCode: HttpStatus.OK.valueOf(),
                data: data
              });
            case 7:
              return _context2.abrupt("return", {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                data: "Data tidak ditemukan"
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findLyrics(_x2) {
        return _findLyrics.apply(this, arguments);
      }
      return findLyrics;
    }()
  }, {
    key: "store",
    value: function () {
      var _store = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(content) {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              data = new this.lyrics(content);
              if (!data) {
                _context3.next = 8;
                break;
              }
              _context3.next = 5;
              return data.save();
            case 5:
              return _context3.abrupt("return", {
                statusCode: HttpStatus.OK.valueOf(),
                data: data,
                message: "Lyrics Stored"
              });
            case 8:
              return _context3.abrupt("return", {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Input Salah"
              });
            case 9:
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Input Data Tidak Lengkap"
              });
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 11]]);
      }));
      function store(_x3) {
        return _store.apply(this, arguments);
      }
      return store;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(title, lyrics) {
        var oldLyrics, data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.lyrics.findOne({
                title: title
              }).exec();
            case 2:
              oldLyrics = _context4.sent;
              data = {
                title: lyrics.title ? lyrics.title : oldLyrics.title,
                artist: lyrics.artist ? lyrics.artist : oldLyrics.artist,
                genre: lyrics.genre ? lyrics.genre : oldLyrics.genre,
                content: lyrics.content ? lyrics.content : oldLyrics.content
              };
              _context4.prev = 4;
              _context4.next = 7;
              return this.lyrics.updateOne({
                title: title
              }, {
                $set: data
              });
            case 7:
              return _context4.abrupt("return", {
                statusCode: HttpStatus.OK.valueOf(),
                data: data,
                message: "Lyrics Update"
              });
            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](4);
              return _context4.abrupt("return", {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Update Gagal: " + _context4.t0.message
              });
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[4, 10]]);
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
              _context5.prev = 0;
              _context5.next = 3;
              return this.lyrics.deleteOne({
                title: title
              });
            case 3:
              return _context5.abrupt("return", {
                statusCode: HttpStatus.OK.valueOf(),
                message: "Lyrics Deleted"
              });
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", {
                statusCode: HttpStatus.BAD_REQUEST.valueOf(),
                message: "Delete Gagal: " + _context5.t0.message
              });
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 6]]);
      }));
      function destroy(_x6) {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
  }]);
  return LyricsService;
}()) || _class) || _class);
exports.LyricsService = LyricsService;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var BSS;
(function (BSS) {
    var Apps;
    (function (Apps) {
        var BUView;
        (function (BUView) {
            var node = function node(id, name) {
                _classCallCheck(this, node);

                this.subNodes = ko.observableArray();
                this.id = id;
                this.name = name;
                this.isCurrentRecord = false;
            };

            var AppViewModel = function () {
                function AppViewModel() {
                    _classCallCheck(this, AppViewModel);

                    this.nodes = ko.observableArray();
                    this.currentRecordId = null;
                }

                _createClass(AppViewModel, [{
                    key: 'onload',
                    value: function onload() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var params, req, units;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            params = Xrm.Page.context.getQueryStringParameters();

                                            if (params['id']) this.currentRecordId = params['id'];
                                            req = "businessunits?$select=name,_parentbusinessunitid_value";
                                            _context.next = 5;
                                            return BSS.Data.RetrieveMultipleAsync(req);

                                        case 5:
                                            units = _context.sent;

                                            this.AddSubs(units, null);

                                        case 7:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }, {
                    key: 'AddSubs',
                    value: function AddSubs(units, parent) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = units[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var e = _step.value;

                                if (!parent && e._parentbusinessunitid_value) continue;
                                if (parent && !BSS.GlobalHelper.AreGuidEqual(parent.id, e._parentbusinessunitid_value)) continue;
                                var collection = parent ? parent.subNodes : this.nodes;
                                var n = new node(e.businessunitid, e.name);
                                n.isCurrentRecord = BSS.GlobalHelper.AreGuidEqual(e.businessunitid, this.currentRecordId);
                                collection.push(n);
                                this.AddSubs(units, n);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }]);

                return AppViewModel;
            }();

            BUView.AppViewModel = AppViewModel;
        })(BUView = Apps.BUView || (Apps.BUView = {}));
    })(Apps = BSS.Apps || (BSS.Apps = {}));
})(BSS || (BSS = {}));
// Activates knockout.js
$(function () {
    var app = new BSS.Apps.BUView.AppViewModel();
    ko.applyBindings(app);
    app.onload();
});
//# sourceMappingURL=App.js.map

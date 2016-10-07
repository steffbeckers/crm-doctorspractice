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
        var VehicleLayout;
        (function (VehicleLayout) {
            var AppViewModel = function () {
                function AppViewModel() {
                    _classCallCheck(this, AppViewModel);

                    this.axles = ko.observableArray();
                    this.currentRecordId = null;
                }

                _createClass(AppViewModel, [{
                    key: 'onload',
                    value: function onload() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var params, req, axles;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            params = Xrm.Page.context.getQueryStringParameters();

                                            if (params['id']) {
                                                _context.next = 3;
                                                break;
                                            }

                                            return _context.abrupt('return');

                                        case 3:
                                            req = "bs_vehiclelayoutaxles?$orderby=bs_position&$filter=_bs_vehiclelayoutid_value eq " + params['id'].replace(/[{}]/g, "").toLowerCase();
                                            _context.next = 6;
                                            return BSS.Data.RetrieveMultipleAsync(req, ["bs_code", "bs_numberoftyres"]);

                                        case 6:
                                            axles = _context.sent;

                                            this.AddAxles(axles);

                                        case 8:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }, {
                    key: 'refresh',
                    value: function refresh() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            this.axles.removeAll();
                                            this.onload();

                                        case 2:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));
                    }
                }, {
                    key: 'AddAxles',
                    value: function AddAxles(crmAxles) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = crmAxles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var e = _step.value;

                                this.axles.push(e);
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

            VehicleLayout.AppViewModel = AppViewModel;
        })(VehicleLayout = Apps.VehicleLayout || (Apps.VehicleLayout = {}));
    })(Apps = BSS.Apps || (BSS.Apps = {}));
})(BSS || (BSS = {}));
// Activates knockout.js
$(function () {
    var app = new BSS.Apps.VehicleLayout.AppViewModel();
    ko.applyBindings(app);
    app.onload();
});
//# sourceMappingURL=App.js.map

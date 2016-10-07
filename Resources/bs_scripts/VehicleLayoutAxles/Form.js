"use strict";

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
    var VehicleLayoutAxles;
    (function (VehicleLayoutAxles) {
        var Form;
        (function (Form) {
            function OnLoad() {
                new CopyDefaultPosition().init();
            }
            Form.OnLoad = OnLoad;

            var CopyDefaultPosition = function () {
                function CopyDefaultPosition() {
                    _classCallCheck(this, CopyDefaultPosition);
                }

                _createClass(CopyDefaultPosition, [{
                    key: "init",

                    // Copy the field default position when type is selected
                    value: function init() {
                        if (BSS.FormHelper.isReadonly()) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_position")) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_vehiclelayoutaxletypeid")) return;
                        BSS.FormHelper.onChange("bs_vehiclelayoutaxletypeid", this.positionOnChangeAsync, this);
                    }
                }, {
                    key: "positionOnChangeAsync",
                    value: function positionOnChangeAsync() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var value, type;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            if (!BSS.FormHelper.hasValue("bs_position")) {
                                                _context.next = 2;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 2:
                                            value = BSS.FormHelper.value("bs_vehiclelayoutaxletypeid");

                                            if (!(value == null)) {
                                                _context.next = 5;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 5:
                                            _context.next = 7;
                                            return BSS.Data.RetrieveAsync("bs_vehiclelayoutaxletype", value[0]['id'], ["bs_defaultposition"]);

                                        case 7:
                                            type = _context.sent;

                                            if (type["bs_defaultposition"]) {
                                                _context.next = 10;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 10:
                                            BSS.FormHelper.value("bs_position", type["bs_defaultposition"]);

                                        case 11:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }]);

                return CopyDefaultPosition;
            }();
        })(Form = VehicleLayoutAxles.Form || (VehicleLayoutAxles.Form = {}));
    })(VehicleLayoutAxles = BSS.VehicleLayoutAxles || (BSS.VehicleLayoutAxles = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
